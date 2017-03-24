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
    		<p id="content"></p>
    	</div>
    	
	
	<script type="text/JavaScript">
	/*
	var $result;
	jQuery(document).ready( function($) {
		$.ajax({
			url: "http://46.101.227.54:1666/",
			success: function( data ) {
				console.log($.parseJSON(data).result);
	
				// Date
				var date = new Date($.parseJSON(data).result.regCloseTime);
				var date_str = date.getDate() + '/' + (date.getMonth() + 1) + '-' +  date.getFullYear().toString().substr(2,2) + ' ' + date.getHours() + '.' + date.getMinutes();
				$("#result").append($('<span />').addClass('date').text(date_str));
	
				// Balls
				var numbers = $.parseJSON(data).result.numbers;
				var ball_container = $('<div></div>').addClass('ball-container');
	
				$.each(numbers, function( index, value ){
				    num = $('<span />').addClass('ball').text(value);
				    if (value == $.parseJSON(data).result.kungKenoNumber[0]) {
					num.addClass('crown-ball')
				    }
				    ball_container.append(num);
				});
				$("#result").append(ball_container);
	
				//Total
				$("#result").append($('<span />').addClass('title').text('Totalt antal vinster'));
				$("#result").append($('<span />').addClass('title-result').text($.parseJSON(data).result.totalWinners));
				$("#result").append($('<span />').addClass('title').text('Totalt utbetalat vinstbelopp'));
				$("#result").append($('<span />').addClass('title-result').text($.parseJSON(data).result.totalPayout));
				//console.log('sendItBack');
		
				//$result = '<div id="result">' + $('#result').html() + '</div>';
				sendItBack('<div id="result">' + $('#result').html() + '</div>', date_str);
			}
		});

 
		function sendItBack($html, $date) {
		console.log('sendItBack');
		 jQuery.ajax({
			type:"POST", 
			url: wp_ajax.ajaxurl, 
			data: {
				action: 'my_action', 
				html: $html,
				date: $date
			}, 
			success: function( response )
			{
				//console.log('Callback');
				//console.log(response);
				// ERROR HANDLING
				if( !response.success )
				{
				    // No data came back, maybe a security error
				    if( !response.data )
				        $( '#randomposts' ).html( 'AJAX ERROR: no response' );
				    else
				        $( '#randomposts' ).html( response.data.error );
				}
				else
				    $( '#randomposts' ).html( response.data );
			}
		}); 
		};
	}); 
	*/
	</script>
		
    	<?php
	echo "<script>document.writeln($result);</script>";

    }	
    add_shortcode('pm-crawler', 'theCrawler');

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
/*	
class WP_TestCron {

    function __construct()
    {
	echo "<script>console.log('constructor')</script>";
        register_activation_hook(__FILE__, array($this, 'TestCron_cron_activate'));
        register_deactivation_hook(__FILE__, array($this, 'TestCron_cron_deactivate'));
        add_filter('cron_schedules', array($this, 'TestCron_cron_update_schedules'));
        add_action('TestCron_cron_eventOne', array($this, 'TestCron_cron_fct'));
	add_action('TestCron_cron_eventTwo', array($this, 'TestCron_cron_fct'));
    }

    function TestCron_cron_activate() 
    {
	echo "<script>console.log('TestCron_cron_activate')</script>";
        // Run => In Schedule Cronjobs 
        if (!wp_next_scheduled('TestCron_cron_eventOne')) { wp_schedule_event(time(), 'in_per_minute', 'TestCron_cron_eventOne'); }

        // Dont't Run => Not in Schedule Cronjobs 
        if (!wp_next_scheduled('TestCron_cron_eventTwo')) { wp_schedule_event(time(), 'in_per_minute', 'TestCron_cron_eventTwo'); }
    }

    function TestCron_cron_deactivate() 
    {
        wp_clear_scheduled_hook('TestCron_cron_eventOne');
        wp_clear_scheduled_hook('TestCron_cron_eventTwo');
    }

    function TestCron_cron_update_schedules() 
    {
        return array(
            'fively' => array('interval' => 300, 'display' => 'Once in Five minutes'),
            'in_per_minute' => array('interval' => 60, 'display' => 'In every minute'),
            'in_per_ten_minute' => array('interval' => 60 * 10, 'display' => 'Once in Ten minutes'),
            'three_hourly' => array('interval' => 60 * 60 * 3,  'display' => 'Once in three hours')
        );  
    }

    function TestCron_cron_fct() 
    {
	echo "<script>console.log('TestCron_cron_fct')</script>";
	theCrawler();	  
    }   
}

$wpTC = new WP_TestCron();
*/ 
?>