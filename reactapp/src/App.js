import logo from "./logo.svg";
import "./App.css";

import User from "./components/user";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="container">
      <Navbar title="Özgeçmiş"></Navbar>
      <hr></hr>
      <User
        name="Yavuz Yarkın Okular"
        mail="yarkinokular@gmail.com"
        location="Pamukkale,Denizli"
      ></User>
    </div>
  );
}

export default App;
