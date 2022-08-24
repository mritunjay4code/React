import React from "react";
import Card from "react-bootstrap/Card";
const Cards = ({ date }) => {
  return (
    <>
      {date.map((element, k) => {
        return (
          <>
            <Card
              style={{ width: "22rem", border: "none" }}
              className=" hove mb-4"
            >
              <Card.Img variant="top" className="cd" src={element.imgdata} />
              <div className="card-body">
                <div className="uper-data d-flex justify-content-between align-items-center">
                  <h4>{element.rname}</h4>
                  <span>{element.rating}&nbsp;★</span>
                </div>
                <div className="lower-data d-flex justify-content-between align-items-center">
                  <h5>{element.address}</h5>
                  <span>{element.price}</span>
                </div>
                <div className="extra"></div>
                <div className="last-data d-flex justify-content-between align-items-center">
                  <img src={element.arrimg} className="last-logo" />
                  <p>{element.somedata}</p>
                  <img src={element.delimg} className="last-logo2" />
                </div>
              </div>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cards;
