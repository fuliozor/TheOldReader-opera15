/**
 * Класс отвечающий за работу с UI
 * @returns {undefined}
 */
function UI() {
	
}

/**
 * Класс отвечающий за работу с сетью
 * @returns {undefined}
 */
function Proxy() {	
	this.headers;
	this.xmlhttp = new XMLHttpRequest();;
}

/**
 * Создает XMLHttpRequest с задаными параметрами
 * @param {string} url - урл
 * @returns {XMLHttpRequest}
 */
Proxy.prototype.createRequest = function(url, callbackSuccess, callbackError) {
	this.xmlhttp.open('POST', url, callback);
	this.xmlhttp.onreadystatechange = function() {
		if(this.xmlhttp.readyState == 4) {
			if(this.xmlhttp.status == 200) {
				callbackSuccess(xmlhttp.responseText, xmlhttp);
			} else {
				callbackError(xmlhttp.responseText, xmlhttp)
			}
		}
		
	};
	
	return this.xmlhttp.open('POST', url, callback);
}

Proxy.prototype.addHeader = function(name, value) {
	
}

/**
 * 
 * @returns {undefined}
 */
function Controller() {
}