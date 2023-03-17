import "./App.css";
import BlogRoute from "./BlogRoute/BlogRoute";
import Details from "./Components/Details";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
// import { useContext } from 'react';
// import { store } from './Components/Details';

function App() {
  return (
    <div>
      <Details>
        <Header />
        <NavBar />
        <BlogRoute />
      </Details>
    </div>
  );
}

export default App;
