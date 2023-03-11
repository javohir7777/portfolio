import React from "react";
import AppFilterItem from "../app-filter-item/App-filter.item";
import "./App-filter.css";

function AppFilter({ data, onDelete, onToggleProp }) {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <AppFilterItem
          key={item.id}
          name={item.name}
          views={item.views}
          favourite={item.favourite}
          like={item.like}
          onDelete={() => onDelete(item.id)}
          onToggleProp={(e) =>
            onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))
          }
        />
      ))}
    </ul>
  );
}

export default AppFilter;
