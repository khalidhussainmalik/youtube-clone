import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecomendedVideos from "./components/RecomendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="app-page">
                  <Sidebar />
                  <RecomendedVideos />
                </div>
              </>
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <>
                <Header />
                <div className="app-page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
