import { registerBlockType } from '@wordpress/blocks';

import { name, title, icon, category, attributes } from './block.json';
import edit from './edit';
import save from './save';

registerBlockType(name, {
  title: title,
  // On the dashicons website it is 'dashicons-block-default' but we remove the 'dashicons-' part for this.
  icon: icon,
  category: category,
  attributes: attributes,
  edit: edit,
  save: save
});