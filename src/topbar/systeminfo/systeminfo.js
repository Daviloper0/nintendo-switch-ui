import React from 'react';
import wifi from './wifi.png'
import battery from './battery.png'

export class SystemInfo extends React.Component {
    getTime() {
        return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})
    }
    render() {
        return (
        <div className='systemInfo'>
            <div className='clock'>
                <p className='time'>
                    {this.getTime()}</p>
                <p className='meridiem'>PM</p>
            </div>
            <img src={wifi} alt='Wifi icon' className='wifi'></img>
            <img src={battery} alt='Battery icon' className='battery'></img>
        </div>
    )
    }
}