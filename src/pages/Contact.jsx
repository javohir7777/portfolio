import React, { Component } from "react";
import Navbar from "../components/Navbar";
import AppAddForm from "./app-add-form/App-add-form";
import AppFilter from "./app-filter/App-filter";
import "./css/Contact.css";
import { v4 as uuidv4 } from "uuid";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Empire of osman",
          views: 988,
          favourite: false,
          like: false,
          id: 1,
        },
        { name: "Ertugrul", views: 789, favourite: false, like: false, id: 2 },
        { name: "Omar", views: 1091, favourite: false, like: false, id: 3 },
      ],
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      views: item.views,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
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
            <AppFilter
              data={data}
              onDelete={this.onDelete}
              onToggleProp={this.onToggleProp}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
