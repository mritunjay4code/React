import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import FoodData from "./FoodData";
import Cards from "./Cards";
import "./Style.css";
export const Search = () => {
  const [fdate, setFdate] = useState(FoodData);
  //console.log(fdate);
  const zomatologo =
    "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center">
        <img
          src={zomatologo}
          style={{
            width: "8rem",
            position: "relative",
            left: "2rem",
            cursor: "pointer",
          }}
          alt=""
        />
        <h2 style={{ color: "#lb1464", cursor: "pointer" }} className="mt-3">
          Search Filter App
        </h2>
      </div>
      <Form className=" d-flex justify-content-center align-items-center mt-3">
        <Form.Group className=" mx-2  col-lg-4" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Search restorent" />
        </Form.Group>
        <button
          className="btn text-lligt col-lg-1"
          style={{ backgroundColor: "#ed4c67" }}
        >
          Submit
        </button>
      </Form>
      <section className="item--action mt-4 container ">
        <h2 className="px-4">Restaurants in Jamui bihar Open now </h2>
        <div className="row mt-2 justify-content-around align-items-center">
          <Cards date={fdate} />
        </div>
      </section>
    </>
  );
};
export default Search;
