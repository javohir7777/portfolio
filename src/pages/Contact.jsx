import React from "react";
import Navbar from "../components/Navbar";
import AppAddForm from "./app-add-form/App-add-form";
import AppFilter from "./app-filter/App-filter";
import "./css/Contact.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <br />
      <div className="app font-monospace">
        <div className="content">
          <AppAddForm />
          <AppFilter />
        </div>
      </div>
    </div>
  );
}

export default Contact;
