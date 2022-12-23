import React from 'react';
import './topbar.css';
import { SystemInfo } from './systeminfo/systeminfo';
import avatar from './avatar.png'

export class TopBar extends React.Component {
    render() {
        return (
        <div className='topbar'>
            <img src={avatar} alt="User avatar" className='avatar'></img>
            <SystemInfo></SystemInfo>
        </div>
        );
    }
}