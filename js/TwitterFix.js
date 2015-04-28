$(document).ready(function(){

var twitHeight = (window.innerHeight - $("footer").height() - $("header").height());
console.debug(twitHeight);	

// insert twitter widget
$('<a class="twitter-timeline" href="https://twitter.com/ImJoeYK" data-widget-id="593067212107157504">Tweets by @ImJoeYK</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(').insertAfter("#twitter-loc");

!function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0], p=/^http:/.test(d.location)?'http':'https';
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.src = p+"://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);
	}
}(document, "script", "twitter-wjs");
});
//https://twittercommunity.com/t/can-i-dynamically-change-the-height-of-a-widget/20274/2
<a class="twitter-timeline" href="https://twitter.com/ImJoeYK" data-widget-id="593067212107157504">Tweets by @ImJoeYK</a>
