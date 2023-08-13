import React from 'react';
import './Onboard.css';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

export const Onboard = () => {
  return (
    <div className='onboard-wrapper'>
        <div className="onboard-heading">
            Onboard Clients
        </div>
        <div className="onboard-text">
            Share the link with the prospects and discuss all stuff
        </div>
        <button className="copy-link-button">
            Copy Link <ContentCopyOutlinedIcon className="copy-link-button-icon"/>
        </button>
    </div>
  )
}
