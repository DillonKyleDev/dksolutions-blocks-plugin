const { registerBlockType } = wp.blocks;
import moduleAttributes from './block';
import { renderEdit } from './renderEdit';
import { renderFrontend } from './renderFrontend';
import { moduleStyles } from '../module-base/module.js';

registerBlockType('dksolutions/two-column', {
  title: "Two Column Block",  
  icon: "block-default",
  category: "design",
  attributes: { 
    ...moduleAttributes,  
    // Default module style attributes
    ...moduleStyles
  },
  edit: renderEdit,
  save: renderFrontend
});