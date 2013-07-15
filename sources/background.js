getCount();

chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
	openOldTab();
  });
});