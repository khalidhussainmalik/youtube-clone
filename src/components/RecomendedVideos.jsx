import React from 'react';
import './RecomendedVideos.css'
import VideoCard from './VideoCard';
import jwad from './images/jwad.png'
import devnation from './images/devnation.jfif';
import awad from './images/awad.png'
import dsc from './images/dsc.png'
import fullstack from './images/fullstack.png';
import pwe from './images/pwe.jpg'
import js from './images/javascript.jfif';
import rt from './images/react.jfif'

function RecomendedVideos() {
  return (
    <div className='recomended-videos'>
      <h2>Recomended</h2>
      <div className="recomendedVideos-videos">
      <VideoCard 
          title="Junior Web App Development"
          views="1.3k Views"
          timestamp="1 year ago"
          channelImage={devnation}
          channel="DevNation"
          image={jwad}
        />
        <VideoCard 
          title="Data Science - Complete Course"
          views="2.7k Views"
          timestamp="1 month ago"
          channelImage={devnation}
          channel="DevNation"
          image={dsc}
        />
        <VideoCard 
          title="Advance Web App Development"
          views="5.3k Views"
          timestamp="5 months ago"
          channelImage={devnation}
          channel="DevNation"
          image={awad}
        />
        <VideoCard 
          title="Javascript Explained in 30 minutes"
          views="367k Views"
          timestamp="2 years ago"
          channelImage={pwe}
          channel="Programming with Ease"
          image={js}
        />
        <VideoCard 
          title="React Properties in 1 hour"
          views="978k Views"
          timestamp="4 months ago"
          channelImage={pwe}
          channel="Programming with Ease"
          image={rt}
        />
        <VideoCard 
          title="Become a fullstack web dveloper in 6 hours"
          views="27k Views"
          timestamp="1 month ago"
          channelImage=""
          channel="DevelopNation"
          image={fullstack}
        />
      </div>
    </div>
  )
}

export default RecomendedVideos