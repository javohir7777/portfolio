import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./css/Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
      like: false,
    };
  }

  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };
  render() {
    const data = [
      { name: "Empire of osmon", viwers: 988, id: 1 },
      { name: "Ertugrul", viwers: 789, id: 2 },
      { name: "Osmon", viwers: 1091, id: 3 },
    ];

    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <br />

        <ul className="movie-list container">
          {data.map((item) => (
            <li
              className={`list-group-item d-flex justify-content-between ${
                this.state.favourite && "favourite"
              } ${this.state.like && "like"}`}
            >
              <span className="list-group-item-lable" onClick={this.onLike}>
                {item.name}
              </span>
              <input
                type="number"
                className="list-group-item-input"
                defaultValue={item.viwers}
              />
              <div className="d-flex justify-content-center align-items-center">
                <button
                  type="button"
                  className="btn-cookie btn-sm"
                  onClick={this.onFavourite}
                >
                  <i className="fa fa-check-square"></i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                  <i className="fa fa-trash"></i>
                </button>
                <i className="fa fa-star"></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contact;
