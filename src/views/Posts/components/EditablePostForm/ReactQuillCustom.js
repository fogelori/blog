export const CustomToolbar = () => (
  <div id="toolbar">
    <select
      className="ql-header tooltip"
      data-title="Header"
      defaultValue={""}
      onChange={(e) => e.persist()}
    >
      <option value="1"></option>
      <option value="2"></option>
      {/* <option selected></option> */}
    </select>
    <button
      className="ql-bold tooltip"
      data-title="Bold"
      // title="Bold"
      // data-toggle="tooltip"
      // data-placement="bottom"
    >
      {/* <span class="tooltiptext">Tooltip text</span> */}
    </button>
    <button
      className="ql-italic tooltip"
      data-title="Italic"
      // title="Italic"
      // data-toggle="tooltip"
      // data-placement="italic"
    ></button>
    <select className="ql-color tooltip" data-title="Font Color">
      {/* <option value="red"></option>
        <option value="green"></option>
        <option value="blue"></option>
        <option value="orange"></option>
        <option value="violet"></option>
        <option value="#d0d1d2"></option>
        <option selected></option> */}
    </select>
    {/* <button className="ql-insertStar"><CustomButton /></button> */}
  </div>
);

// const modules = {
//   toolbar: [
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [{ header: "1" }, { header: "2" }, { font: [] }],
//     [{ size: [] }],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" },
//     ],
//     [{ color: [] }, { background: [] }], // dropdown with defaults from theme
//     [{ font: [] }],
//     [{ align: [] }],
//     [{ direction: "rtl" }],
//     ["link", "image", "video"],
//     ["clean"],
//   ],
// };

export const modules = {
  toolbar: {
    container: "#toolbar",
    // handlers: {
    //   insertStar: insertStar,
    // },
  },
};
