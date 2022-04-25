import React from "react";
import ListBox from "../../../../../components/ListBox/ListBox";
import ListBoxOption from "../../../../../components/ListBox/components/ListBoxOption/ListBoxOption";
import "./FilterPosts.css";

function FilterPosts(props) {
  //   let labelId = `taco-label--${useId()}`;
  return (
    <div className="FilterPosts">
      <ListBox
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className="FilterPosts__select"
      >
        <ListBoxOption className="FilterPosts__option" value="All">
          All
        </ListBoxOption>
        {props.categories.map((category) => (
          <ListBoxOption className="FilterPosts__option" value={category}>
            {category}
          </ListBoxOption>
        ))}
      </ListBox>
    </div>
  );
}

export default FilterPosts;
