const moduleAttributes = {
  columnGap: {
    type: "string",
    default: "medium"
  },
  leftColumnContentType: {
    type: "string",
    default: "image"
  },
  rightColumnContentType: {
    type: "string",
    default: "content"
  },
  leftColumnContent: { 
    type: "array"
  },
  rightColumnContent: { 
    type: "array"
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