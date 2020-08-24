<?php
/**
 * Theme functions and definitions.
 *
 * @package Ranking100OS
 * @since Ranking100OS 1.0
 */

// File Security Check
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * Load initialization file
 */
require get_template_directory() . '/inc/init.php';

/**
 * Theme setup
 */
if ( ! function_exists( 'Ranking100OS_setup' ) ) :
    /**
     * Setup the theme and it's dependencies
     * All dependencie files can be found on
     * the theme's /inc folder.
     */
    function Ranking100OS_setup()
    {
        load_theme_textdomain('default',get_template_directory()."/lang");
        // Enable support for Post Thumbnails
        add_theme_support( 'post-thumbnails' );
        // Create Post Thumbnails sizes
        set_post_thumbnail_size( 350, 350, true );

        // Hide the admin bars
        add_filter('show_admin_bar', '__return_false');

        // This theme uses wp_nav_menu() in one locations.
        register_nav_menus( array(
            'primary' => 'Menu Primário'
        ) );

        // Switch default core markup for search form, comment form, and comments
        // to output valid HTML5.
        add_theme_support( 'html5', array(
            'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
        ) );

        // Include Custom Post Types
        //require Ranking100OS_POST_TYPES_DIR . '/cpt_beneficio.php';
        //require Ranking100OS_POST_TYPES_DIR . '/cpt_empresa.php';
        //require Ranking100OS_POST_TYPES_DIR . '/cpt_evento.php';
        require Ranking100OS_POST_TYPES_DIR . '/cpt_reto.php';

        // Disable default post type
        add_action('admin_menu','remove_default_post_type');
        function remove_default_post_type() {
            remove_menu_page('edit.php');
        }
    }
    /* Remove Tags */
    // function Ranking100OS_remove_tags(){
    //     register_taxonomy('post_tag', array());
    // }
    // /* Remove Category */
    // function Ranking100OS_remove_category(){
    //     register_taxonomy('category', array());
    // }
    // add_action('init', 'Ranking100OS_remove_tags');
    // add_action('init', 'Ranking100OS_remove_category');
    add_action( 'after_setup_theme', 'Ranking100OS_setup', 15 );
endif;
// */

/**
 * Create a filter for the wp_nav_menu_args function
 *
 * @param array $args {Funciton arguments to be added}
 * @return array
 */
function Ranking100OS_nav_menu_args( $args = '' )
{
    $args['container'] = false;
    $args['items_wrap'] = '<ul id="%1$s" class="%2$s">%3$s</ul>';
    return $args;
}
add_filter( 'wp_nav_menu_args', 'Ranking100OS_nav_menu_args' );
// */

if ( ! function_exists( 'theme_infinitescroll' ) ) :
    /**
     * Creates the current content breadcrumb
     *
     * @param boolean $onhome {Hide/Show the breadcrumb on the frontpage. Default Hide (false)}
     *
     * @return string $html {Created breadcrumb HTML structure}
     */
    function theme_infinitescroll ()
    {
        $file            = $_POST['file'];
        $paged           = $_POST['paged'];
        $posts_per_page  = get_option('posts_per_page');
        query_posts(array('paged' => $paged ));
        get_template_part( $file );

        exit;
    }
    add_action('wp_ajax_infinite_scroll', 'theme_infinitescroll');
    add_action('wp_ajax_nopriv_infinite_scroll', 'theme_infinitescroll');
endif;

/**
 * E-mail send
 */
if ( ! function_exists( 'Ranking100OS_sendmail' ) ) :
    /**
     * Prepare and sends the e-mail
     *
     * @param String $to        {Email that will receive the e-mail}
     * @param String $subject   {Email subject}
     * @param String $body      {Email body with all content text or HTML}
     * @param String $from      {Email from wicth it will be sent from / remetente}
     *
     * @return  boolean
     */
    function Ranking100OS_sendmail( $to, $subject, $body, $replyto )
    {
        // From
        $from='Ranking100OS <contato@Ranking100OS>';
        // Prepare headers
        $headers  = "MIME-Version: 1.1\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8\r\n";
        $headers .= "From: ".$from."\r\n";
        $headers .= "Reply-To: ".$replyto."\r\n";
        $headers .= "Return-Path: ".$replyto."\r\n";
        //$headers .= "Cc: ti@Ranking100OS";
        // Clear header if is_array
        if ( is_array($to) ) {
            $headers  = "";
            $headers .= "From: ".$from."\r\n";
            $headers .= "Return-Path: ".$from."\r\n";
            $headers .= "Bcc: ". implode(', ', $to);
            $to = $from;
        }
        // Try to send the e-mail
        //if ( mail($to, $subject, $body, $headers) ) {
        if ( wp_mail( $to, $subject, $body, $headers ) ) {
            return true;
        }
        return false;
        return false;
    }
endif;
// */

/**
 * Better title
 */
if ( ! function_exists( 'Ranking100OS_wp_title' ) ) :
    /**
     * Create a nicely formatted and more specific title element text for output
     * in head of document, based on current view.
     *
     * @global int $paged WordPress archive pagination page count.
     * @global int $page  WordPress paginated post page count.
     *
     * @param string $title Default title text for current view.
     * @param string $sep Optional separator.
     * @return string The filtered title.
     */
    function Ranking100OS_wp_title( $title, $sep )
    {
        global $paged, $page;
        if ( is_feed() ) { return $title; }
        // Add the site name.
        $title .= get_bloginfo( 'name', 'display' );
        // Add the site description for the home/front page.
        $site_description = get_bloginfo( 'description', 'display' );
        if ( $site_description && ( is_home() || is_front_page() ) ) {
            $title = "$title $sep $site_description";
        }
        // Add a page number if necessary.
        if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
            $title = "$title $sep " . sprintf( __( 'Page %s', 'aliada' ), max( $paged, $page ) );
        }
        return $title;
    }
    add_filter( 'wp_title', 'Ranking100OS_wp_title', 10, 2 );
endif;
// */

/**
 * Image with captions
 */
if ( ! function_exists( 'Ranking100OS_wp_caption' ) ) :
    /**
     * Create a filter to replace the standart wp-caption markup
     *
     * @return text HTML content
     */
    function Ranking100OS_wp_caption ($val, $attr, $content = null)
    {
        extract(shortcode_atts(array(
            'id'    => '', 'align'  => '', 'width'  => '', 'caption' => ''
        ), $attr));

        if ( 1 > (int) $width || empty($caption) )
            return $val;
        $capid = '';
        if ( $id ) {
            $id = esc_attr($id);
            $capid = 'id="figcaption_'. $id . '" ';
            $id = 'id="' . $id . '" aria-labelledby="figcaption_' . $id . '" ';
        }
        return '<figure ' . $id . 'class="wp-caption ' . esc_attr($align) . '">'
        . do_shortcode( $content ) . '<figcaption ' . $capid
        . 'class="wp-caption-text">' . $caption . '</figcaption></figure>';
    }
    add_filter('img_caption_shortcode', 'Ranking100OS_wp_caption', 10, 3);
endif;
// */

add_action( 'after_setup_theme', 'theme_setup' );

function theme_setup() {
    add_action( 'init', 'add_support_to_pages' );
}

function add_support_to_pages() {
    add_post_type_support( 'page', 'excerpt' );
}

/**
 * Menu arguments
 */
if ( ! function_exists( 'Ranking100OS_nav_menu_args' ) ) :
    /**
     * Create a filter for the wp_nav_menu_args function
     *
     * @param array $args {Funciton arguments to be added}
     * @return array
     */
    function Ranking100OS_nav_menu_args( $args = '' )
    {
        $args['container'] = false;
        $args['items_wrap'] = '<ul id="%1$s" class="%2$s">%3$s</ul>';
        return $args;
    }
    add_filter( 'wp_nav_menu_args', 'Ranking100OS_nav_menu_args' );
    // */
endif;

/**
 * Administrator Footer
 */
if ( !function_exists( 'Ranking100OS_admin_footer' ) ) :
    /**
     * Filter to replace the admin footer text
     * @return String
     */
  
endif;

function youtube_id_from_url($url) {
    $pattern =
        '%^# Match any youtube URL
        (?:https?://)?  # Optional scheme. Either http or https
        (?:www\.)?      # Optional www subdomain
        (?:             # Group host alternatives
          youtu\.be/    # Either youtu.be,
        | youtube\.com  # or youtube.com
          (?:           # Group path alternatives
            /embed/     # Either /embed/
          | /v/         # or /v/
          | /watch\?v=  # or /watch\?v=
          )             # End path alternatives.
        )               # End host alternatives.
        ([\w-]{10,12})  # Allow 10-12 for 11 char youtube id.
        $%x'
        ;
    $result = preg_match($pattern, $url, $matches);
    if (false !== $result) {
        return $matches[1];
    }
    return false;
}


function get_attachment_id_by_url( $url ) {
    $post_id = attachment_url_to_postid( $url );
    if ( ! $id ){
        $dir = wp_upload_dir();
        $path = $url;
        if ( 0 === strpos( $path, $dir['baseurl'] . '/' ) ) {
            $path = substr( $path, strlen( $dir['baseurl'] . '/' ) );
        }
        if ( preg_match( '/^(.*)(\-\d*x\d*)(\.\w{1,})/i', $path, $matches ) ){
            $url = $dir['baseurl'] . '/' . $matches[1] . $matches[3];
            $post_id = attachment_url_to_postid( $url );
        }
    }
    return (int) $post_id;
}

/**
 * Administration scripts and styles
 */
function register_enqueued()
{
    echo '<script type="text/javascript" src="' . trailingslashit( get_template_directory_uri() ) . 'js/admin.js"></script>';
}
add_action( 'admin_head', 'register_enqueued' );
// */

/**
 * Login customization functions
 */
function Ranking100OS_customlogin_css() {
    wp_enqueue_style('login-styles', get_template_directory_uri() . '/css/login.css');
}
function Ranking100OS_customlogin_url() {
    return esc_url( home_url() );
}
function Ranking100OS_customlogin_txt() {
    return get_bloginfo( 'name', 'display' );
}
add_action('login_enqueue_scripts', 'Ranking100OS_customlogin_css');
add_filter('login_headerurl', 'Ranking100OS_customlogin_url');
add_filter('login_headertitle', 'Ranking100OS_customlogin_txt');
// */
@ini_set( 'upload_max_size' , '10M' );
@ini_set( 'post_max_size', '10M');
@ini_set( 'max_execution_time', '300' );

// custom admin style sheet
function my_admin_head() {
    echo '<link href="'.get_stylesheet_directory_uri().'/wp-admin.css" rel="stylesheet" type="text/css">';
}
add_action('admin_head', 'my_admin_head');
