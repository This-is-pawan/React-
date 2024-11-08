// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const firstBook = {
  Img: "https://m.media-amazon.com/images/I/41POhI5EGaL._SY445_SX342_.jpg",
  Titles: "The Art of Moving On",
};
const BookList = () => {
  return (
    <>
      <Book />
      <Book />
      <Book />
      <Book />
    </>
  );
};

function Book() {
  return (
    <>
      <div className="main">
        <Image Img={firstBook.Img} />
        <Title Titles={firstBook.Titles} >

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi nesciunt, accusamus veniam odio nulla placeat blanditiis laboriosam sunt. Placeat eius quod numquam minus mollitia architecto est fuga ipsum repudiandae?</p>
        </Title>
        <Author />
      </div>
    </>
  );
}

function Image(props) {
  const { Img } = props;
  return (
    <>
      <img
        src={Img}
        alt="The Art of Moving On"
        title="The Art of Moving On"
        className="image"
      />
    </>
  );
}
const Title = ({Titles,children}) => {
  // const { Titles } = props;
  return (
    <>
      <h3>{Titles}</h3>
      {children}
    </>
  );
};
const Author = () => (
  <>
    <p>
      Author
      <b title="famous author" style={{ color: "blue" }}>
        :Harshita Gupta
      </b>
    </p>
    <article className="btnAlign">
      <button className="btn">
        <a href="https://www.forbesindia.com/lists/2023-digital-stars/profile/harshita-gupta/9">
          More About
        </a>
      </button>
    </article>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
