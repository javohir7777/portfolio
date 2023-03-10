import { Component } from "react";
import "./App-add-form.css";
import { v4 as uuidv4 } from "uuid";
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
  addFormHandler = (e) => {
    e.preventDefault();
    const { name, views } = this.state;
    this.props.addForm({
      name: name,
      views: views,
      id: uuidv4(),
    });
    this.setState({
      name: "",
      views: "",
    });
  };
  render() {
    const { name, views } = this.state;
    return (
      <div className="movie-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit={this.addFormHandler}>
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
