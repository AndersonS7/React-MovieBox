import './App.css';
import Footer from './Components/Footer/Footer.js';
import Feed from './Components/SectionFeed/Feed.js';
import SectionTop from './Components/SectionTop/SectionTop.js';

function App() {
  return (
    <div className="App">
      <SectionTop />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
