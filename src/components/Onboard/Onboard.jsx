import React, { useState } from 'react';
import './Onboard.css';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

export const Onboard = () => {
	const [copySuccess, setCopySuccess] = useState('');

	// your function to copy here

	const copyToClipBoard = async (copyMe) => {
		try {
			await navigator.clipboard.writeText(copyMe);
			setCopySuccess(true);
			setTimeout(() => {
				setCopySuccess(false);
			}, 3000);
		} catch (err) {
			setCopySuccess(false);
		}
	};

	return (
		<div className="onboard-wrapper">
			<div className="onboard-heading">Onboard Clients</div>
			<div className="onboard-text">Share the link with the prospects and discuss all stuff</div>
			<button onClick={() => copyToClipBoard('link to copy here')} className="copy-link-button">
				Copy Link <ContentCopyOutlinedIcon className="copy-link-button-icon" />
			</button>
			{copySuccess && <div className="copied-toast">Successfully Copied</div>}
		</div>
	);
};
