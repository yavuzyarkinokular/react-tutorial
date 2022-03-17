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
      <User
        name="İlayda Bulut"
        mail="ibulut48@gmail.com"
        location="Marmaris,Muğla"
      ></User>
    </div>
  );
}

export default App;
