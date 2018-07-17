import React, { Component } from 'react';
import './AccountView.css';

class AccountView extends Component {
    render() {
        return (
            <div className="accountView container">
                <div className="navbarContainer">
                    <div className="navbarIconLeft">
                        <svg viewBox="0 0 24 24">
                            <path d="M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z" />
                        </svg>
                    </div>

                    <div className="navbarHeader">
                        <div className="navbarHeaderMain">
                            <span>ACCOUNT 1</span>
                        </div>
                        <div className="navbarHeaderSub">
                            <span>0X548845F...F8XG</span>
                        </div>
                        <svg viewBox="10 0 180 155">
                            <path d="M145.300029,27.4527165 C145.159357,27.3442697 145.018684,27.2358229 144.842844,27.1273762 C144.139482,26.5851423 143.330616,26.0067595 142.345909,25.6814192 C125.254214,21.415846 107.951511,17.077975 91.2114967,12.8846997 C76.0188791,9.08906254 60.8614295,5.2934254 45.6688119,1.49778826 C45.2819628,1.38934149 44.8951138,1.28089471 44.4730966,1.17244794 C43.1015409,0.77480976 41.5189765,0.341022658 39.8309079,0.557916209 C39.3385546,0.630214059 38.9165374,0.810958685 38.5296883,1.06400116 L38.1076712,1.42549041 C37.4394773,2.07617106 37.0877964,2.90759634 36.9119559,3.37753237 L36.8064516,5.32957432 C46.4776781,33.2365445 56.3247451,61.2881104 65.8201311,88.4359532 C73.1350952,109.330032 80.731404,130.983238 88.1518724,152.238806 C88.6090576,153.684763 89.9102772,154.624635 91.5280096,154.769231 C93.3919187,154.769231 94.7283064,154.010103 95.3965002,152.78104 L123.249633,111.029031 C130.037075,100.871183 136.824518,90.6771865 143.61196,80.5193386 C146.39024,76.3622122 149.16852,72.1689369 151.946799,68.0118105 C156.518652,61.1435147 161.231177,54.0583254 165.908533,47.1538807 L166.15471,46.7923914 C166.260214,45.093392 166.295383,42.4906693 164.255633,41.1170102 C158.171552,36.7429903 151.665454,32.0797789 145.300029,27.4527165 Z M111.204032,67.0793522 C115.177118,62.7850742 119.185996,58.4547099 123.159082,54.1604318 C128.134387,48.7474764 133.324453,43.1540891 138.407139,37.6689609 L138.51452,37.5607018 C138.944043,36.9833198 139.480946,36.4420243 140.053643,35.8646424 C140.447372,35.4676923 140.876895,35.0707422 141.270624,34.6016194 C143.919348,36.4420243 146.603865,38.3185155 149.181001,40.1589204 C151.042266,41.4941161 152.939325,42.8293117 154.872177,44.1645074 C146.997594,48.2061808 139.12301,52.3561134 131.498982,56.3977868 C124.841379,59.8981646 118.040603,63.5068016 111.204032,67.0793522 Z M99.9366175,71.9510121 C89.9412215,59.5099608 79.7353961,46.8891255 69.8452148,34.6997718 C65.3560544,29.1624252 60.8318226,23.5891219 56.3426622,18.0517753 C55.2905153,16.8292443 54.3085115,15.5347996 53.3265076,14.3122686 C52.6952195,13.4852623 52.0288597,12.6942128 51.3625,11.8672065 C55.4308015,12.9459103 59.5341746,13.9527006 63.5674046,14.9235341 C67.1096327,15.7864972 70.792147,16.6854171 74.4045182,17.6202938 C94.7460259,22.690202 115.122605,27.7601102 135.464113,32.8300184 C128.695301,40.2371183 121.891417,47.7520886 115.297963,55.0153614 C110.282729,60.5886647 105.092138,66.3057952 99.9366175,71.9510121 Z M99.0577496,112.542076 C99.3766892,109.487542 99.6956288,106.361136 100.014568,103.378473 C100.510697,98.5990258 101.042263,93.6398998 101.467515,88.7885808 L101.573829,87.9261241 C101.928206,84.8356542 102.282583,81.6373773 102.49521,78.4391004 C102.885025,78.2234862 103.310277,78.007872 103.770968,77.8281935 C104.302534,77.5766436 104.8341,77.3610295 105.365666,77.0376082 C113.551782,72.689389 121.737898,68.3411698 129.959452,64.0288863 C138.145568,59.7166027 146.54431,55.2605764 154.872177,50.8404858 C147.288503,61.9805516 139.66939,73.2284244 132.298342,84.1888117 C125.954988,93.5680284 119.434445,103.234731 112.949341,112.75769 C110.397824,116.566874 107.739994,120.447929 105.223915,124.185241 C102.388896,128.353782 99.4830024,132.63013 96.6479839,136.906478 C97.0023612,132.594194 97.427614,128.245975 97.8883045,124.005563 C98.2781195,120.232315 98.7033723,116.35126 99.0577496,112.542076 Z M46.5104839,15.1149798 C56.1591831,26.9448578 65.8793541,38.8473119 75.3493737,50.3868862 C80.2451952,56.3744012 85.1410167,62.3256282 90.0368381,68.3494312 C91.001708,69.4743582 91.966578,70.6718612 92.895712,71.8330762 C94.1107333,73.320883 95.3257547,74.8812657 96.6479839,76.3690724 C96.2191528,80.1067333 95.8617936,83.8806822 95.4686984,87.5094791 C95.218547,90.049637 94.9683955,92.5897949 94.6825081,95.1662407 C94.5753003,96.8354873 94.3608848,98.4684459 94.1822052,100.065117 C93.9320537,102.278683 93.360279,107.286423 93.360279,107.286423 C92.6812964,114.870608 91.8951061,122.273354 91.1446517,129.458372 C90.8230284,132.433985 90.537141,135.482175 90.2155177,138.530364 C90.0368381,137.986045 89.8224226,137.441725 89.643743,136.933694 C89.1077041,135.482175 88.5716653,133.95808 88.0713623,132.470273 L84.2476186,121.692746 C72.1331407,87.4731911 60.0186628,53.2899238 47.9041849,19.0340805 C47.4396179,17.7277136 46.9393149,16.3850587 46.5104839,15.1149798 Z" id="Logo_Tron"></path>
                        </svg>
                    </div>

                    <div className="navbarIconRight">
                        <svg viewBox="0 0 24 24">
                            <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
                        </svg>
                    </div>
                </div>

                <div className="accountBalance">
                    <span className="accountBalanceAmount">5,300,314.504</span>
                    <span className="accountBalanceTicker">TRX</span>
                    <div className="accountBalanceUSD">3.55 USD</div>
                </div>

                <div className="buttonContainer">
                    <div className="button">Send</div>
                    <div className="button">Buy</div>
                </div>
            </div>
        );
    }
}

export default AccountView;