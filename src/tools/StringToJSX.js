// The best solution (StringToJSX) that i have found
// https://stackoverflow.com/a/58626638

// another solution (react-html-parser) if the current solution (StringToJSX) will not work
// https://stackoverflow.com/a/52049829

// the solution "dangerouslySetInnerHTML" is the worst because it expose you to XSS attacks

import React from "react";

let getNodes = (str) =>
  new DOMParser().parseFromString(str, "text/html").body.childNodes;
let createJSX = (nodeArray) => {
  // const className = nodeArray[0].className;
  return nodeArray.map((node) => {
    let attributeObj = {};
    const { attributes, localName, childNodes, nodeValue } = node;
    if (attributes) {
      Array.from(attributes).forEach((attribute) => {
        if (attribute.name === "style") {
          let styleAttributes = attribute.nodeValue.split(";");
          let styleObj = {};
          styleAttributes.forEach((attribute) => {
            let [key, value] = attribute.split(":");
            styleObj[key] = value;
          });
          attributeObj[attribute.name] = styleObj;
        } else {
          attributeObj[attribute.name] = attribute.nodeValue;
        }
      });
    }
    return localName
      ? React.createElement(
          localName,
          attributeObj,
          childNodes.length && Array.isArray(Array.from(childNodes))
            ? createJSX(Array.from(childNodes))
            : null
        )
      : nodeValue;
  });
};

export const StringToJSX = (str) => {
  return createJSX(Array.from(getNodes(str)));
};
