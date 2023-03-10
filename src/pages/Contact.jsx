import React, { Component } from "react";
import Navbar from "../components/Navbar";
import AppAddForm from "./app-add-form/App-add-form";
import AppFilter from "./app-filter/App-filter";
import "./css/Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Empire of osman", views: 988, favourite: false, id: 1 },
        { name: "Ertugrul", views: 789, favourite: false, id: 2 },
        { name: "Omar", views: 1091, favourite: true, id: 3 },
      ],
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }));
  };

  addForm = (item) => {
    this.setState(({ data }) => ({
      data: [...data, item],
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Navbar />
        <br />
        <div className="app font-monospace">
          <div className="content">
            <AppAddForm addForm={this.addForm} />
            <AppFilter data={data} onDelete={this.onDelete} />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
