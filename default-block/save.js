export default function(props) {
  return React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Company Information"),
    React.createElement("h3", null, "Company: ", props.attributes.companyName),
    React.createElement("h3", null, "Phone: ", props.attributes.companyPhone),
    React.createElement("h3", null, "Address: ", props.attributes.companyAddress));
}