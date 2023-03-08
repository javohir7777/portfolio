import React from "react";
import AppFilterItem from "../app-filter-item/App-filter.item";
import "./App-filter.css";

function AppFilter() {
  return (
    <div className="movie-list">
      <AppFilterItem />
      <AppFilterItem />
      <AppFilterItem />
    </div>
  );
}

export default AppFilter;
