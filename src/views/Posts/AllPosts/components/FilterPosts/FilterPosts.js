import React from "react";
import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";
import "./FilterPosts.css";

function FilterPosts(props) {
  //   let labelId = `taco-label--${useId()}`;
  return (
    <div className="FilterPosts">
      <ListboxInput
        // aria-labelledby={labelId}
        value={props.value}
        onChange={(value) => props.setValue(value)}
      >
        <ListboxButton arrow="▼" />
        <ListboxPopover className="FilterPosts__popover">
          <ListboxList>
            <ListboxOption className="FilterPosts__option" value="All">
              Filter by Category
            </ListboxOption>
            {props.categories.map((category) => (
              <ListboxOption className="FilterPosts__option" value={category}>
                {category}
              </ListboxOption>
            ))}
          </ListboxList>
          {/* <div
            style={{
              padding: "10px 10px 0",
              marginTop: 10,
              borderTop: "1px solid gray",
            }}
          >
            <p>I really like tacos. I hope you enjoy them as well!</p>
          </div> */}
        </ListboxPopover>
      </ListboxInput>
    </div>
  );
}

export default FilterPosts;
