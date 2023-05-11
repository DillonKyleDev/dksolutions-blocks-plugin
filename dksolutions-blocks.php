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
  // MAKE SURE TO:
  // 1. Add any more block js files to the package.json build and start scripts for building the jsx into React code
  // 2. Make sure to link to the built js file instead of the one you're writing the code in like below!
  // 3. Make sure you're building/starting your watch protocal while editing or changes will not be built.

  // Add the css in here also so that it's used in the block_editor_assets required files
  wp_register_style('dksolutions-css', plugin_dir_url( __FILE__ ) . '/dist/app.css', array(), false, 'all');
  wp_enqueue_style('dksolutions-css'); 

  wp_register_script('two-column-block', plugin_dir_url( __FILE__ ) . 'build/index.js', array('wp-blocks', 'wp-i18n', 'wp-editor', 'wp-edit-post'), 1, false);
  wp_enqueue_script('two-column-block');
}

add_action('enqueue_block_editor_assets', 'dksolutions_block_script_register');


// Enqueue Dependencies
function load_dksolutions_blocks_css() {      
  wp_register_style('bootstrap', plugin_dir_url( __FILE__ ) . '/dependencies/bootstrap/css/bootstrap.min.css', array(), false, 'all');
  wp_enqueue_style('bootstrap'); 

  // Styles for Magnific Popup and Owl Carousel imported in app.scss file
  wp_register_style('dksolutions-css', plugin_dir_url( __FILE__ ) . '/dist/app.css', ['bootstrap'], false, 'all');
  wp_enqueue_style('dksolutions-css'); 
}

add_action('wp_enqueue_scripts', 'load_dksolutions_blocks_css');

function load_dksolutions_blocks_js() {
  wp_enqueue_script('jquery');

  wp_register_script('bootstrap', plugin_dir_url( __FILE__ ) . '/dependencies/bootstrap/js/bootstrap.min.js', ['jquery'], false, true);
  wp_enqueue_script('bootstrap');

  wp_register_script('owl-carousel', plugin_dir_url( __FILE__ ) . '/dependencies/owl-carousel/js/owl.carousel.min.js', ['jquery'], false, true);
  wp_enqueue_script('owl-carousel');

  wp_register_script('magnific-popup', plugin_dir_url( __FILE__ ) . '/dependencies/magnific-popup/js/jquery.magnific-popup.min.js', ['jquery'], false, true);
  wp_enqueue_script('magnific-popup');

  wp_register_script('dksolutions-js', plugin_dir_url( __FILE__ ) . '/dist/app.js', ['jquery'], false, true);
  wp_enqueue_script('dksolutions-js');
}

add_action('wp_enqueue_scripts', 'load_dksolutions_blocks_js');