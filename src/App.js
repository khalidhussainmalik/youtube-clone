import "./App.css";
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import RecomendedVideos from './components/RecomendedVideos';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return <div className="app">
    <Header />
    <div className="app-page">
      <Sidebar />
      <RecomendedVideos />
    </div>
  </div>;
}

export default App;
