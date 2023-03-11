import "./App-filter-item.css";

function AppFilterItem({
  name,
  views,
  onDelete,
  onToggleProp,
  favourite,
  like,
}) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        favourite && "favourite"
      } ${like && "like"}`}
    >
      <span
        onClick={onToggleProp}
        className="list-group-item-lable"
        data-toggle="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={views}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
          data-toggle="favourite"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

export default AppFilterItem;
