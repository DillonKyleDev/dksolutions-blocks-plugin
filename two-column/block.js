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
    type: "string",
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean et tortor. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. In mollis nunc sed id. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Feugiat pretium nibh ipsum consequat. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Odio morbi quis commodo odio aenean sed adipiscing diam. Viverra aliquet eget sit amet tellus. Ac placerat vestibulum lectus mauris ultrices eros. Facilisis volutpat est velit egestas dui. Tincidunt eget nullam non nisi. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Elementum pulvinar etiam non quam lacus." 
  },
  rightColumnContent: { 
    type: "string",
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean et tortor. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. In mollis nunc sed id. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Feugiat pretium nibh ipsum consequat. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Odio morbi quis commodo odio aenean sed adipiscing diam. Viverra aliquet eget sit amet tellus. Ac placerat vestibulum lectus mauris ultrices eros. Facilisis volutpat est velit egestas dui. Tincidunt eget nullam non nisi. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Elementum pulvinar etiam non quam lacus." 
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