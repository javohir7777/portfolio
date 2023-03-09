import { Component } from "react";
import "./App-filter-item.css";

class AppFilterItem extends Component {
  constructor(props) {
    super(props);
    this.state = { favourite: false };
  }
  onFavourite = () => {
    this.setState((prevState) => ({
      favourite: !prevState.favourite,
    }));
  };
  render() {
    const { name, viewers } = this.props,
      { favourite } = this.state;
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          favourite && "favourite"
        }`}
      >
        <span className="list-group-item-lable">{name}</span>
        <input
          type="number"
          className="list-group-item-input"
          defaultValue={viewers}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.onFavourite}
            type="button"
            className="btn-cookie btn-sm"
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

// function AppFilterItem({ name, viewers, favourite }) {
//   return (
//     <li
//       className={`list-group-item d-flex justify-content-between ${
//         favourite && "favourite"
//       }`}
//     >
//       <span className="list-group-item-lable">{name}</span>
//       <input
//         type="number"
//         className="list-group-item-input"
//         defaultValue={viewers}
//       />
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm">
//           <i className="fas fa-cookie"></i>
//         </button>
//         <button type="button" className="btn-trash btn-sm">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// }

export default AppFilterItem;
