export const stripTagsFromString = (body) => {
  // https://stackoverflow.com/questions/1499889/remove-html-tags-in-javascript-with-regex
  var regex = /(<([^>]+)>)/gi,
    result = body.replace(regex, " ");

  //   console.log(body);
  //   console.log(result);

  return result;
};

export const shortenString = (str, maxLength) => {
  // https://stackoverflow.com/a/5454303

  let trimmedString = str.substr(0, maxLength);

  if (str.length > maxLength) {
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );
  }

  return trimmedString;
};

// General (didnt use)
// Finding Unique Words
// https://stackoverflow.com/a/30335883
