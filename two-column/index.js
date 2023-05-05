wp.blocks.registerBlockType('dksolutions/two-column', {
  title: "Two Column",
  // On the dashicons website it is 'dashicons-block-default' but we remove the 'dashicons-' part for this.
  icon: "block-default",
  category: "design",
  attributes: { 
    "companyName": { "type": "string" },
    "companyPhone": { "type": "string" },
    "companyAddress": { "type": "string" }
  },
  edit: function(props) {
    return null;
},
  save: function(props) {
    return null;
  }
});