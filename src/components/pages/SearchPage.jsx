import React from "react";
import "../pages/SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import cp from "../images/cp.jfif";
import VideoRow from "./VideoRow";
import YouTube from '../images/logo.webp'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage-filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image={cp}
        channel="Clever Programmer"
        verified
        subs="660k"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will make your coding skills to the next level"
      />
      <hr />
      <VideoRow
        views="2.5M"
        subs="987K"
        description="In this video we hav build a fully functional youtube clone using Reactjs and Firebase"
        timestamp='1 day ago'
        channel="Clever Programmer"
        title='Lets build a youtube clone with REACT JS'
        image={YouTube}
      />
    </div>
  );
}

export default SearchPage;
