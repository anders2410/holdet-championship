import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import {Col, Container, Row} from "react-bootstrap";
import HomePage from "./components/homePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
