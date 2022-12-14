
import AvgRating from "./components/AvgRating"
import Reviews from  "./components/Reviews"
import SentimentAnalysis from "./components/SentimentAnalysis"
import Sidenav from  "./components/Sidenav"
import WebsiteVisitors from "./components/WebsiteVisitors"
//css
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidenav />
      <div className="right">
      <div className="top">
        <Reviews />
        <AvgRating />
        <SentimentAnalysis/>
      </div>
        <WebsiteVisitors/>
      </div>
    </div>
  );
}

export default App;
