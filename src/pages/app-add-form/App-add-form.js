import { Component } from "react";
import "./App-add-form.css";

class AppAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", views: "" };
  }
  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, views } = this.state;
    return (
      <div className="movie-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            name="name"
            onChange={this.changeHandlerInput}
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Necha marta ko'rilgan?"
            name="views"
            onChange={this.changeHandlerInput}
            value={views}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default AppAddForm;
