import React from 'react';
import './Information.css';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';

export const Information = () => {
  return (
    <div className='information'>
        <div className="information-upper">
            <div className="information-upper-wrapper time">
                <AccessTimeOutlinedIcon className='information-upper-wrapper-logo'/>
                <div className="information-upper-wrapper-data">
                    <h1>13H</h1>
                    <p>Time</p>
                </div>
            </div>
            <div className="information-upper-wrapper attended">
                <GroupOutlinedIcon className='information-upper-wrapper-logo'/>
                <div className="information-upper-wrapper-data">
                    <h1>188</h1>
                    <p>Attended</p>
                </div>
            </div>
            <div className="information-upper-wrapper meetings">
                <EventAvailableOutlinedIcon className='information-upper-wrapper-logo'/>
                <div className="information-upper-wrapper-data">
                    <h1>119</h1>
                    <p>Meetings</p>
                </div>
            </div>
            <div className="information-upper-wrapper rejected">
                <MarkUnreadChatAltOutlinedIcon className='information-upper-wrapper-logo'/>
                <div className="information-upper-wrapper-data">
                    <h1>41</h1>
                    <p>Rejected</p>
                </div>
            </div>
        </div>
        {/* <div className="information-lower"></div> */}
    </div>
  )
}
