<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'gutenberg_example_team_enqueue_block_editor_assets' );

function gutenberg_example_team_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'block-our-team',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);
}

add_action( 'enqueue_block_assets', 'gutenberg_example_team_enqueue_block_assets' );

function gutenberg_example_team_enqueue_block_assets() {
	wp_enqueue_style(
		'block-our-team',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}
