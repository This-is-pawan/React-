// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const BookList=()=> {
  return (
    <>
     <Book/>
     <Book/>
     <Book/>
     <Book/>
    </>
  );
}



function Book(){
  return (
    <>
    <div className="main">
     <Image/>
     <Title/>
     <Author/>
     </div>
    </>
  )
}


function Image() {
  return (
    <>
    <img src="https://m.media-amazon.com/images/I/41POhI5EGaL._SY445_SX342_.jpg" alt="The Art of Moving On" title="The Art of Moving On" className="image" />
    
  
    </>
  );
}
const Title =()=> <h3>The Art of Moving On</h3>
const Author =()=> (<><p>Author<b title="famous author">:Harshita Gupta</b></p>
<article className="btnAlign">
<button className="btn"><a href="https://www.forbesindia.com/lists/2023-digital-stars/profile/harshita-gupta/9">More About</a></button>
</article>
</>)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);


