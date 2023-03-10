import React from "react";
import AppFilterItem from "../app-filter-item/App-filter.item";
import "./App-filter.css";

function AppFilter({ data, onDelete }) {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <AppFilterItem
          key={item.id}
          name={item.name}
          views={item.views}
          favourite={item.favourite}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
}

export default AppFilter;
