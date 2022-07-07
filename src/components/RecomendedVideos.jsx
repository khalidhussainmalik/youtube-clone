import React from 'react';
import './RecomendedVideos.css'
import VideoCard from './VideoCard';
import fullstack from './images/fullstack.png'
import fullstack1 from './images/fullstack1.jfif'
import js from './images/javascript.jfif';
import rt from './images/react.jfif'

function RecomendedVideos() {
  return (
    <div className='recomended-videos'>
      <h2>Recomended</h2>
      <div className="recomendedVideos-videos">
        <VideoCard 
          title="Fullstack web development in 2022"
          views="5.3k Views"
          timestamp="2 days ago"
          channelImage={fullstack}
          channel="Programming with Ease"
          image={fullstack}
        />
        <VideoCard 
          title="Become a fullstack web dveloper in 6 hours"
          views="27k Views"
          timestamp="1 month ago"
          channelImage=""
          channel="DevelopNation"
          image={fullstack1}
        />
        <VideoCard 
          title="Javascript Explained in 30 minutes"
          views="367k Views"
          timestamp="2 years ago"
          channelImage=""
          channel="Programming with Ease"
          image={js}
        />
        <VideoCard 
          title="React Properties in 1 hour"
          views="978k Views"
          timestamp="4 months ago"
          channelImage=""
          channel="Programming with Ease"
          image={rt}
        />
        <VideoCard 
          title="Become a web dveloper in 2022"
          views="2.5M Views"
          timestamp="2 year ago"
          channelImage=""
          channel="Programming with Ease"
          image=""
        />
        <VideoCard 
          title="Become a web dveloper in 2022"
          views="2.5M Views"
          timestamp="2 days ago"
          channelImage=""
          channel="Programming with Ease"
          image=""
        />
      </div>
    </div>
  )
}

export default RecomendedVideos