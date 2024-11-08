// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


function Greeting() {
  return (
    <>
     <Message/>
    </>
  );
}



function Message(){
  return (
    <>
     <nav>
        <div className="navBar">
          <ul className="unOrderList">
            <li><a href="&#">Home</a></li>
            <li><a href="&#">About</a></li>
            <li><a href="&#">Contact</a></li>
            <li><a href="&#">FAQ</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}


function App() {
  return (
    <>
      <Greeting />
      
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


