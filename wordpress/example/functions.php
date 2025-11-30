<?php
/**
 * TinyConsent WordPress Integration
 * 
 * Add this code to your theme's functions.php or create a simple plugin.
 * 
 * Get your script at: https://tinyconsent.com
 * Full guide: https://tinyconsent.com/cookie-banner-for-wordpress
 */

/**
 * Add TinyConsent cookie banner script to head
 * 
 * The priority of 1 ensures it loads before other scripts
 */
function tinyconsent_add_cookie_banner() {
    // Replace YOUR_SCRIPT_ID with your actual script ID from TinyConsent
    $script_id = 'YOUR_SCRIPT_ID';
    
    echo '<script src="https://scripts.tinyconsent.com/api/scripts/' . esc_attr($script_id) . '" async></script>';
}
add_action('wp_head', 'tinyconsent_add_cookie_banner', 1);

/**
 * Optional: Add privacy policy link to footer
 * 
 * Uncomment to enable
 */
/*
function tinyconsent_privacy_policy_link() {
    // Replace YOUR_POLICY_ID with your policy ID from TinyConsent
    // Generate at: https://tinyconsent.com/privacy-policy-generator
    $policy_id = 'YOUR_POLICY_ID';
    
    echo '<p class="tinyconsent-privacy-link">';
    echo '<a href="https://tinyconsent.com/api/privacy-policies/' . esc_attr($policy_id) . '/display">';
    echo 'Privacy Policy';
    echo '</a>';
    echo '</p>';
}
add_action('wp_footer', 'tinyconsent_privacy_policy_link');
*/

/**
 * Optional: Add privacy policy shortcode
 * 
 * Usage: [tinyconsent_privacy_policy]
 * 
 * Uncomment to enable
 */
/*
function tinyconsent_privacy_policy_shortcode($atts) {
    $atts = shortcode_atts(array(
        'height' => '800',
    ), $atts);
    
    // Replace YOUR_POLICY_ID with your policy ID
    $policy_id = 'YOUR_POLICY_ID';
    
    return '<iframe 
        src="https://tinyconsent.com/api/privacy-policies/' . esc_attr($policy_id) . '/display" 
        width="100%" 
        height="' . esc_attr($atts['height']) . '" 
        frameborder="0" 
        title="Privacy Policy"
        style="border: none;"
    ></iframe>';
}
add_shortcode('tinyconsent_privacy_policy', 'tinyconsent_privacy_policy_shortcode');
*/

