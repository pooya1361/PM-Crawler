<?php

/*
Plugin Name: PM Web Crawler
Plugin URI: http://www.datorassistent.se/
Description: A special web crawler
Version: 1.0
Author: Pouya Mahpeikar
*/

    
    function add_files() {
        // JS
        wp_register_script( 'ajax-random-post', plugins_url( 'script.js', __FILE__ ), array('jquery') );
	wp_enqueue_script('ajax-random-post');
	
        wp_enqueue_script( 
             'ajax-random-post',
             plugins_url( "script.js", __FILE__ ),
             array( 'jquery' )
        );
	

        wp_localize_script( 
             'ajax-random-post',
             'wp_ajax',
             array( 
                 'ajaxurl'      => admin_url( 'admin-ajax.php' )
            ) 
        );
	


        // CSS
        wp_enqueue_style( 'pmwc-css', plugins_url('/style.css', __FILE__));

	// Schedule an action if it's not already scheduled
	if ( ! wp_next_scheduled( 'myprefix_my_cron_action' ) ) {
	    wp_schedule_event( time(), 'weekly', 'myprefix_my_cron_action' );
	}
	 
    }
    add_action('wp_enqueue_scripts', 'add_files');
	
    function theCrawler(){
    	?>
    	<div id="result">

    	</div>
    	
		
    	<?php
	echo "<script>document.writeln($result);</script>";

    }	
    add_shortcode('pm-crawler', 'theCrawler');

    function theCrawlerHeader($atts){
    	?>
    	<div id="pm-crawler-header">

            <a id="more-results" href="<?php echo esc_url( get_permalink( $atts['result_page'] ) ); ?>">Mer...</a>
    	</div>
		
    	<?php
	echo "<script>document.writeln($result);</script>";

    }	
    add_shortcode('pm-crawler-header', 'theCrawlerHeader');


	function my_action()
	{	
	echo $_POST['html'];
	echo "<script>document.writeln($result);</script>";
	
	// Create post object
	$my_post = array(
	'post_title'    => wp_strip_all_tags( $_POST['date'] ),
	'post_content'  => $_POST['html'],
	'post_status'   => 'publish',
	'post_author'   => 1
	);
	
	// Insert the post into the database
	//wp_insert_post( $my_post );
	
	}
	
	add_action( 'wp_ajax_my_action', 'my_action' );
	add_action( 'wp_ajax_nopriv_my_action', 'my_action' );

?>