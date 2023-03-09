import React from "react";
import Navbar from "../components/Navbar";
import AppAddForm from "./app-add-form/App-add-form";
import AppFilter from "./app-filter/App-filter";
import "./css/Contact.css";

function Contact() {
  const data = [
    { name: "Empire of osman", viewers: 988, favourite: false },
    { name: "Ertugrul", viewers: 789, favourite: false },
    { name: "Omar", viewers: 1091, favourite: true },
  ];
  return (
    <div>
      <Navbar />
      <br />
      <div className="app font-monospace">
        <div className="content">
          <AppAddForm />
          <AppFilter data={data} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
