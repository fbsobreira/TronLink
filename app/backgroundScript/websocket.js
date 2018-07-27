import randomUUID from 'uuid/v4';
import { CURRENCY } from 'lib/constants';
import Logger from 'lib/logger';

const logger = new Logger('WebSocket');

export default class TronWebsocket {
    constructor(popup, url = 'ws://ws.tron.watch:8089') {
        this._popup = popup;
        this._url = url;

        this._webSocket = false;
        this._connectionID = randomUUID();
        this._addresses = {};
    }

    onEvent(event) {
        let message;

        try {
            message = JSON.parse(event.data);
        } catch(ex) {
            logger.warn('Failed to parse websocket event');
            return logger.error(ex);
        }

        if(message.cmd == 'ADDRESS_EVENT') {
            //
            // TODO: Till, when you receive an address event here
            // do this._addresses[address] = true
            //
            // This means that the address has been acknowledged
            // by the server
            //

            return logger.info('Address event:', message);
        }

        if(message.symbol == 'TRX' && message.USD && message.USD.price) {
            logger.info(`Received new TRX price: $${message.USD.price}`);

            return this._popup.broadcastPrice(
                parseFloat(message.USD.price)
            );
        }

        logger.warn('Received unknown websocket event', event);
    }

    onConnect(event) {
        logger.info('Connection established');

        Object.keys(this._addresses).forEach(address => {
            this._addAlert(address);
        });
    }

    _addAlert(address) {
        this._addresses[address] = false;

        this._webSocket.send(JSON.stringify({
            userid: this._connectionID,
            cmd: 'START_ALERT',
            address
        }));
    }

    _connect() {
        logger.info('Initiating connection');

        this._webSocket = new WebSocket(this._url);

        this._webSocket.onopen = event => {
            this.onConnect(event);
        };

        this._webSocket.onclose = event => {
            logger.info('Lost connection to websocket');

            setTimeout(() => {
                this._connect();
            }, 5000);
        }

        this._webSocket.onmessage = event => {
            this.onEvent(event)
        };
    }

    addAddresses(...addresses) {
        addresses.forEach(address => {
            logger.info(`Creating bind for address ${address}`);

            if(this._addresses[address])
                return logger.info(`Address ${address} already bound`);

            this._addAlert(address);
        });
    }

    start() {
        this._connect();
    }
}