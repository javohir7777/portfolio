import React from "react";
import AppFilterItem from "../app-filter-item/App-filter.item";
import "./App-filter.css";

function AppFilter({ data }) {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <AppFilterItem
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
        />
      ))}
    </ul>
  );
}

export default AppFilter;
