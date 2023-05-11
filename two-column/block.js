const moduleAttributes = {
  columnGap: {
    type: "string",
    default: "medium"
  },
  leftColumnContentType: {
    type: "string",
    default: "content"
  },
  rightColumnContentType: {
    type: "string",
    default: "content"
  },
  leftColumnContentHeading: { 
    type: "string",
    default: "Content Heading"
  },
  leftColumnContentBody: {          
    type: "string",
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."      
  },
  rightColumnContentHeading: { 
    type: "string",
    default: "Content Heading"
  },
  rightColumnContentBody: {          
    type: "string",
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."      
  },
  leftImageUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src',
    default: 'https://ten-fingers-local.local/wp-content/uploads/2023/04/Earth.Day_2023_1.jpg'
  },
  rightImageUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src',
    default: 'https://ten-fingers-local.local/wp-content/uploads/2023/04/Earth.Day_2023_1.jpg'
  },
  leftVideoUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'video',
    attribute: 'src',
    default: 'https://www.youtube.com/watch?v=CTV-wwszGw8&ab_channel=NotJustBikes'
  },
  rightVideoUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'video',
    attribute: 'src',
    default: 'https://www.youtube.com/watch?v=CTV-wwszGw8&ab_channel=NotJustBikes'
  },
}

export default moduleAttributes;