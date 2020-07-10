//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "27 dec 2019 18:30:00",
				format: "on"
			},
			
			function() {
			});
});	

window.elegantPlay = false;

window.onclick = function() {
	!window.elegantPlay ? (new Audio('music/_.mp3')).play() && (window.elegantPlay = true): (()=>{})();
}

window.ecstacy = function() {
	alert('510-000-0000');
}

if(!window.location.href.contains('https')) {
	window.location.href = 'https://sharonnoelle.herokuapp.com';
}