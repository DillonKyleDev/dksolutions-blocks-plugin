<?php
/**
 * Plugin Name: DK Solutions Blocks
 * Description: A collection of custom Wordpress blocks to aid in content creation on pages and posts.
 * Author: Dillon Kyle
 * Author URI: https://dillonkyleportfolio.netlify.app/
 * Version: 1.0.0
 * Text Domain: dksolutions
 */

 // Ensure plugin php is only accessed through the application.  ADD TO ALL PHP PAGES
if( !defined('ABSPATH') )
{
  exit;
}

function dksolutions_block_script_register()
{
  // wp_register_script('default-block', plugin_dir_url( __FILE__ ) . 'default-block/index.js', array('wp-blocks', 'wp-i18n', 'wp-editor'), 1, false);
  // wp_enqueue_script('default-block');

  wp_register_script('two-column-block', plugin_dir_url( __FILE__ ) . 'two-column/index.js', array('wp-blocks', 'wp-i18n', 'wp-editor'), 1, false);
  wp_enqueue_script('two-column-block');
}

add_action('enqueue_block_editor_assets', 'dksolutions_block_script_register');