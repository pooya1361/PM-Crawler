jQuery(document).ready( function($) {
	/*
	$('#save').click( function() {
		console.log($('#result').html());
	});
	*/
	
	$.ajax({
		url: "https://moobrag.com/scrape?num=7",
		success: function( data ) {
			console.log($.parseJSON(data));

                        $.parseJSON(data).map(function(result) {

			// Date
			var date = new Date(result.regCloseTime);
			var date_str = date.getDate() + '/' + (date.getMonth() + 1) + '-' +  date.getFullYear().toString().substr(2,2) + ' ' + date.getHours() + '.' + date.getMinutes();
			$("#result").append($('<span />').addClass('date').text(date_str));

			// Balls
			var numbers = result.numbers;
			var ball_container = $('<div></div>').addClass('ball-container');

			$.each(numbers, function( index, value ){
			    num = $('<span />').addClass('ball').text(value);
			    if (value == result.kungKenoNumber[0]) {
				num.addClass('crown-ball')
			    }
			    ball_container.append(num);
			});
			$("#result").append(ball_container);

			//Total
			$("#result").append($('<span />').addClass('title').text('Totalt antal vinster'));
			$("#result").append($('<span />').addClass('title-result').text(result.totalWinners));
			$("#result").append($('<span />').addClass('title').text('Totalt antal vinster'));
			$("#result").append($('<span />').addClass('title-result').text(result.totalPayout));
			//console.log('sendItBack');

                        });
	
			//sendItBack('<div id="result">' + $('#result').html() + '</div>', date_str);
		},
		error: function() {
			var data = '{"result":{"numbers":[13,38,23,16,18,9,30,35,27,66,8,44,64,55,67,25,69,41,1,53],"kungKenoNumber":[27],"distributionRegular":[{"id":11,"name":"Keno 11","distribution":[{"name":"11 rätt","winners":0,"amount":"5000000,00"},{"name":"10 rätt","winners":0,"amount":"125000,00"},{"name":"9 rätt","winners":1,"amount":"3000,00"},{"name":"8 rätt","winners":45,"amount":"300,00"},{"name":"7 rätt","winners":394,"amount":"30,00"},{"name":"6 rätt","winners":1835,"amount":"10,00"},{"name":"5 rätt","winners":5841,"amount":"5,00"}]},{"id":10,"name":"Keno 10","distribution":[{"name":"10 rätt","winners":0,"amount":"1000000,00"},{"name":"9 rätt","winners":0,"amount":"25000,00"},{"name":"8 rätt","winners":10,"amount":"1000,00"},{"name":"7 rätt","winners":165,"amount":"100,00"},{"name":"6 rätt","winners":875,"amount":"20,00"},{"name":"5 rätt","winners":3554,"amount":"5,00"},{"name":"0 rätt","winners":1074,"amount":"5,00"}]},{"id":9,"name":"Keno 9","distribution":[{"name":"9 rätt","winners":0,"amount":"250000,00"},{"name":"8 rätt","winners":4,"amount":"6000,00"},{"name":"7 rätt","winners":44,"amount":"250,00"},{"name":"6 rätt","winners":253,"amount":"50,00"},{"name":"5 rätt","winners":1102,"amount":"10,00"}]},{"id":8,"name":"Keno 8","distribution":[{"name":"8 rätt","winners":0,"amount":"50000,00"},{"name":"7 rätt","winners":22,"amount":"1200,00"},{"name":"6 rätt","winners":287,"amount":"100,00"},{"name":"5 rätt","winners":1918,"amount":"15,00"},{"name":"4 rätt","winners":6911,"amount":"5,00"}]},{"id":7,"name":"Keno 7","distribution":[{"name":"7 rätt","winners":2,"amount":"12000,00"},{"name":"6 rätt","winners":35,"amount":"500,00"},{"name":"5 rätt","winners":455,"amount":"50,00"},{"name":"4 rätt","winners":2400,"amount":"5,00"}]},{"id":6,"name":"Keno 6","distribution":[{"name":"6 rätt","winners":8,"amount":"2100,00"},{"name":"5 rätt","winners":285,"amount":"100,00"},{"name":"4 rätt","winners":2167,"amount":"15,00"},{"name":"3 rätt","winners":8445,"amount":"5,00"}]},{"id":5,"name":"Keno 5","distribution":[{"name":"5 rätt","winners":22,"amount":"1000,00"},{"name":"4 rätt","winners":339,"amount":"45,00"},{"name":"3 rätt","winners":2381,"amount":"5,00"}]},{"id":4,"name":"Keno 4","distribution":[{"name":"4 rätt","winners":112,"amount":"160,00"},{"name":"3 rätt","winners":1492,"amount":"10,00"},{"name":"2 rätt","winners":6295,"amount":"5,00"}]},{"id":3,"name":"Keno 3","distribution":[{"name":"3 rätt","winners":305,"amount":"90,00"},{"name":"2 rätt","winners":3202,"amount":"5,00"}]},{"id":2,"name":"Keno 2","distribution":[{"name":"2 rätt","winners":318,"amount":"35,00"}]},{"id":1,"name":"Keno 1","distribution":[{"name":"1 rätt","winners":875,"amount":"10,00"}]}],"distributionKungKeno":[{"id":11,"name":"Keno 11","distribution":[{"name":"11 rätt","winners":0,"amount":"15000000,00"},{"name":"10 rätt","winners":0,"amount":"225000,00"},{"name":"9 rätt","winners":2,"amount":"6000,00"},{"name":"8 rätt","winners":22,"amount":"600,00"},{"name":"7 rätt","winners":158,"amount":"100,00"},{"name":"6 rätt","winners":627,"amount":"20,00"},{"name":"5 rätt","winners":1515,"amount":"15,00"},{"name":"4 rätt","winners":2462,"amount":"10,00"},{"name":"3 rätt","winners":2162,"amount":"10,00"},{"name":"2 rätt","winners":1096,"amount":"10,00"},{"name":"1 rätt","winners":199,"amount":"30,00"}]},{"id":10,"name":"Keno 10","distribution":[{"name":"10 rätt","winners":0,"amount":"3000000,00"},{"name":"9 rätt","winners":0,"amount":"50000,00"},{"name":"8 rätt","winners":2,"amount":"2000,00"},{"name":"7 rätt","winners":50,"amount":"200,00"},{"name":"6 rätt","winners":311,"amount":"50,00"},{"name":"5 rätt","winners":773,"amount":"20,00"},{"name":"4 rätt","winners":1496,"amount":"10,00"},{"name":"3 rätt","winners":1650,"amount":"10,00"},{"name":"2 rätt","winners":944,"amount":"10,00"},{"name":"1 rätt","winners":217,"amount":"30,00"}]},{"id":9,"name":"Keno 9","distribution":[{"name":"9 rätt","winners":0,"amount":"800000,00"},{"name":"8 rätt","winners":1,"amount":"15000,00"},{"name":"7 rätt","winners":1,"amount":"600,00"},{"name":"6 rätt","winners":67,"amount":"100,00"},{"name":"5 rätt","winners":227,"amount":"20,00"},{"name":"4 rätt","winners":479,"amount":"10,00"},{"name":"3 rätt","winners":717,"amount":"10,00"},{"name":"2 rätt","winners":402,"amount":"10,00"},{"name":"1 rätt","winners":163,"amount":"30,00"}]},{"id":8,"name":"Keno 8","distribution":[{"name":"8 rätt","winners":0,"amount":"150000,00"},{"name":"7 rätt","winners":5,"amount":"4000,00"},{"name":"6 rätt","winners":92,"amount":"300,00"},{"name":"5 rätt","winners":427,"amount":"30,00"},{"name":"4 rätt","winners":1169,"amount":"20,00"},{"name":"3 rätt","winners":1949,"amount":"10,00"},{"name":"2 rätt","winners":1539,"amount":"10,00"},{"name":"1 rätt","winners":483,"amount":"30,00"}]},{"id":7,"name":"Keno 7","distribution":[{"name":"7 rätt","winners":0,"amount":"30000,00"},{"name":"6 rätt","winners":15,"amount":"1500,00"},{"name":"5 rätt","winners":80,"amount":"150,00"},{"name":"4 rätt","winners":388,"amount":"30,00"},{"name":"3 rätt","winners":831,"amount":"10,00"},{"name":"2 rätt","winners":796,"amount":"10,00"},{"name":"1 rätt","winners":273,"amount":"30,00"}]},{"id":6,"name":"Keno 6","distribution":[{"name":"6 rätt","winners":0,"amount":"11000,00"},{"name":"5 rätt","winners":52,"amount":"400,00"},{"name":"4 rätt","winners":392,"amount":"50,00"},{"name":"3 rätt","winners":1083,"amount":"20,00"},{"name":"2 rätt","winners":1248,"amount":"10,00"},{"name":"1 rätt","winners":630,"amount":"30,00"}]},{"id":5,"name":"Keno 5","distribution":[{"name":"5 rätt","winners":7,"amount":"3000,00"},{"name":"4 rätt","winners":65,"amount":"170,00"},{"name":"3 rätt","winners":272,"amount":"30,00"},{"name":"2 rätt","winners":481,"amount":"20,00"},{"name":"1 rätt","winners":282,"amount":"30,00"}]},{"id":4,"name":"Keno 4","distribution":[{"name":"4 rätt","winners":27,"amount":"1000,00"},{"name":"3 rätt","winners":186,"amount":"70,00"},{"name":"2 rätt","winners":567,"amount":"30,00"},{"name":"1 rätt","winners":451,"amount":"30,00"}]},{"id":3,"name":"Keno 3","distribution":[{"name":"3 rätt","winners":64,"amount":"500,00"},{"name":"2 rätt","winners":248,"amount":"50,00"},{"name":"1 rätt","winners":337,"amount":"30,00"}]},{"id":2,"name":"Keno 2","distribution":[{"name":"2 rätt","winners":28,"amount":"250,00"},{"name":"1 rätt","winners":57,"amount":"50,00"}]},{"id":1,"name":"Keno 1","distribution":[{"name":"1 rätt","winners":46,"amount":"200,00"}]}],"totalWinners":83786,"totalPayout":"1472380,00","topWin":{"winners":1,"amount":"15000,00","description":"Keno 9 med Kung Keno"},"productName":"Keno","productId":9,"drawNumber":8843,"currentNetSale":"0","regCloseTime":"2017-03-16T18:25:00+01:00"},"error":null,"requestInfo":{"elapsedTime":3,"apiVersion":1},"requestId":"47ae6206-2264-4db5-8fd9-25e9e339ebb6","deviceId":"07359c91-8f6e-4d73-bf81-863ae4a94727","session":null,"sessionUser":null,"clientInfo":null}';

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
			$("#result").append($('<span />').addClass('title').text('Totalt antal vinster'));
			$("#result").append($('<span />').addClass('title-result').text($.parseJSON(data).result.totalPayout));
			//console.log('sendItBack');
	
			//sendItBack('<div id="result">' + $('#result').html() + '</div>', date_str);
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
				console.log('Callback');
				console.log(response);
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

