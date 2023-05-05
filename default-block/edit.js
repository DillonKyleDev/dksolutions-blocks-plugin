export default function(props) {
  function handleName(e) {      
    props.setAttributes({ companyName: e.target.value })
  }
  function handlePhone(e) {      
    props.setAttributes({ companyPhone: e.target.value })
  }
  function handleAddress(e) {      
    props.setAttributes({ companyAddress: e.target.value })
  }

  // <form>
  //   <label>Company Name</label>
  //   <input type='text' value={props.attributes.companyName} placeholder='Company Name' onChange='handleName()'/>
  //   <label>Company Phone</label>
  //   <input type='text' value={props.attributes.companyPhone} placeholder='Company Phone' onChange='handlePhone()'/>
  //   <label>Company Address</label>
  //   <input type='text' value={props.attributes.companyAddress} placeholder='Company Name' onChange='handleAddress()'/>
  // </form>

  return React.createElement("form", null, React.createElement("label", null, "Company Name"), React.createElement("input", {
    type: "text",
    value: props.attributes.companyName,
    placeholder: "Company Name",
    onChange:handleName
  }), React.createElement("label", null, "Company Phone"), React.createElement("input", {
    type: "text",
    value: props.attributes.companyPhone,
    placeholder: "Company Phone",
    onChange:handlePhone
  }), React.createElement("label", null, "Company Address"), React.createElement("input", {
    type: "text",
    value: props.attributes.companyAddress,
    placeholder: "Company Name",
    onChange:handleAddress
  }));
}