var INTERVAL = 15 * 60 * 1000; //15 минут
//var INTERVAL = 10000; //15 минут

var dictionary;

if(getLanguage() == 'ru') {
	//debugger;
	dictionary = new Rus();
} else {
	dictionary = new Eng();
}

function findOldTab(callback) {
	chrome.tabs.query(
		{url: "*://theoldreader.com/*"},
		function (tabs) {
		  callback(tabs[0]);
		}
	);
}

function openOldTab() {
	//debugger;
  findOldTab(function(tab) {
    if (tab) {
      chrome.tabs.update(tab.id, {selected: true});
    } else {
      var url = 'http://theoldreader.com/'
      chrome.tabs.create({url: url});
    }
  });
}

function sendCountRequest() {
	//debugger
	var xmlhttp = new XMLHttpRequest()
	xmlhttp.open('GET', 'https://theoldreader.com/feeds/counts.json', true);
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState != 4) return
		 
		if (xmlhttp.status == 200) {				
			var json = JSON.parse(xmlhttp.responseText);
			//debugger;
			var unreaded = parseJson(json);
			
			updateBadge(unreaded);
			updateIcon(true);
		}else if(xmlhttp.status == 403) {
			updateBadge('');
			updateIcon(false);
		} else {
			updateBadge(dictionary.error);
			updateIcon(false);
		}
	};
	
	xmlhttp.send(null);
}

/**
 * Разбирает пришедший JSON и считает количество непрочитаных новостей
 * @param {JSON} response
 * @returns {int} count
 */
function parseJson(json) {
	var unreaded = 0;
	json = json.feeds[0].feeds;
	var l = json.length;

	for(var i = 0; i < l; i++) {
		unreaded += json[i].unread_count;
	}

	return unreaded;
	//console.log(unreaded);
}

function updateBadge(text) {
	chrome.browserAction.setBadgeText({text: text.toString()});
}

/**
 * 
 * @param {type} icon - true цветная иконка, false черно-белая
 */
function updateIcon(icon) {
	if(icon) {
		chrome.browserAction.setIcon({path: 'icon-active.png'});
	} else {
		chrome.browserAction.setIcon({path: 'icon-inactive.png'});
	}
}


function getCount() {
	//debugger;
	sendCountRequest();
	var timer = setInterval(sendCountRequest, INTERVAL);
}

/**
 * Возвращает язык который нужно использовать
 * @returns {string}
 */
function getLanguage() {
	var language = localStorage.getItem('language');
	
	if(!language) {
		language = navigator.language;
	}
	
	return language;
}