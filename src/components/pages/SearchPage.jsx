import React from "react";
import "../pages/SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import devnation from "../images/devnation.jfif";
import VideoRow from "./VideoRow";
import jwad from '../images/jwad.png'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage-filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image={devnation}
        channel="DevNation"
        verified
        subs="908"
        noOfVideos={42}
        description="Our goal is to help people from non-technical backgrounds break into the world of web development. 

        If you are a beginner and don't know where to start, this is the perfect place for you to be!"
      />
      <hr />
      <VideoRow
        views="4.6k"
        subs="908"
        description="In this video we hav build a fully functional youtube clone using Reactjs and Firebase"
        timestamp='1 year ago'
        channel="DevNation"
        title='Introduction to the web-DevNation-Lecture 1 (Urdu)'
        image={jwad}
      />
      <VideoRow
        views="4.6k"
        subs="908"
        description="In this video we hav build a fully functional youtube clone using Reactjs and Firebase"
        timestamp='1 year ago'
        channel="DevNation"
        title='Introduction to the web-DevNation-Lecture 1 (Urdu)'
        image={jwad}
      />
      <VideoRow
        views="4.6k"
        subs="908"
        description="In this video we hav build a fully functional youtube clone using Reactjs and Firebase"
        timestamp='1 year ago'
        channel="DevNation"
        title='Introduction to the web-DevNation-Lecture 1 (Urdu)'
        image={jwad}
      />      
    </div>
  );
}

export default SearchPage;
