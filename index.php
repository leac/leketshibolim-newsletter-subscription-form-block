<?php

/**
 * Plugin Name: Leketshibolim Newsletter Subscription Form Block
 * Plugin URI: https://github.com/leac/leketshibolim-newsletter-subscription-form
 * Description: This plugin adds a newsletter subscription form to my site
 * Version: 1.1.0
 * Author: Lea Cohen
 *
 * @package leketshibolim-newsletter-subscription-form
 */

defined('ABSPATH') || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
add_action('init', 'leketshibolim_newsletter_subscription_form_load_textdomain');

function leketshibolim_newsletter_subscription_form_load_textdomain() {
    load_plugin_textdomain('lnsf', false, basename(__DIR__) . '/languages');
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function leketshibolim_newsletter_subscription_form_register_block() {

    if (!function_exists('register_block_type')) {
        // Gutenberg is not active.
        return;
    }
    wp_enqueue_script('mailchimp-script', '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js', null, null, true);

    wp_register_script(
        'leketshibolim-newsletter-subscription-form',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore', 'mailchimp-script'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );

    wp_register_style(
        'leketshibolim-newsletter-subscription-form',
        plugins_url('style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'style.css')
    );

    register_block_type('leketshibolim-plugins/leketshibolim-newsletter-subscription-form', array(
        'style' => 'leketshibolim-newsletter-subscription-form',
        'editor_script' => 'leketshibolim-newsletter-subscription-form',
    ));

    if (function_exists('wp_set_script_translations')) {
        /**
         * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
         * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
         * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
         */
        wp_set_script_translations('leketshibolim-newsletter-subscription-form', 'lnsf', plugin_dir_path(__FILE__) . 'languages');
    }

}

add_action('init', 'leketshibolim_newsletter_subscription_form_register_block');
