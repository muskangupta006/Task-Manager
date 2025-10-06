import React from "react";
import PropTypes from "prop-types";

function ListGroup({ items, heading, selectedIndex, onSelectItem }) {
  return (
    <>
      <h3>{heading}</h3>
      {items.length === 0 ? <p>No tasks found!</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            onClick={() => onSelectItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

ListGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string,
  selectedIndex: PropTypes.number.isRequired,
  onSelectItem: PropTypes.func.isRequired
};

export default ListGroup;