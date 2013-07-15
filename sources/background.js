//<!-- Google Analytics -->
//ga('create', 'UA-20521762-3', 'opera.com');
//ga('send', 'pageview');
//<!-- End Google Analytics -->

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-20521762-3']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

getCount();

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
		//debugger;
	//ga('send', 'event', 'button', 'click', 'open site');
	_gaq.push(['_trackEvent', 'button', 'open site']);
	openOldTab();
  });
});