import Avatar from "@mui/material/Avatar";
import React from 'react';
import '../pages/ChannelRow.css';
import VerifiedIcon from '@mui/icons-material/Verified'

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow-logo' alt={channel} src={image} />
        <div className="channelRow-text">
            <h4>{channel} {verified && <VerifiedIcon />}</h4>
            <p>{subs} subscribers . {noOfVideos} videos</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow