import React, { Component } from 'react';

export default class CreateSmartContract extends Component {
    render() {
        const confirmation = this.props.confirmation;

        return (
            <div className="confirmSend">
                { this.props.queueLength }

                <div className="confirmSmartContract bold">Create Smart Contract</div>
                <div className="paramGroup">
                    Contact Address:
                    <input type="text" name="contract_address" /><br />
                    Function Selector:
                    <input type="text" name="function_selector"/><br/>
                    Parameter:
                    <input type="text" name="parameter"/><br />
                    Bandwidth Limit:
                    <input type="text" name="bandwidth_limit"/> <br/>
                    CPU Limit:
                    <input type="text" name="cpu_limit"/><br/>
                    Storage Limit:
                    <input type="text" name="storage_limit"/><br/>
                    Drop Limit:
                    <input type="text" name="drop_limit"/><br />
                    Call Value:
                    <input type="text" name="call_value"/>

                </div>
                <div className="confirmGroup">
                    <textarea value={ 
                        JSON.stringify(confirmation.abi, null, 2) 
                    } className="confirmTextArea" readonly></textarea>
                </div>

                { this.props.buttons }
            </div>
        );
    }
}