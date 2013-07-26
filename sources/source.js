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
	this.xmlhttp = new XMLHttpRequest();
	this.xmlhttp.scope = this;
	this.method = 'GET';
	this.url;
	this.callbackSuccess;
	this.callbackError;
};

/**
 * Создает XMLHttpRequest с задаными параметрами
 * @param {string} url - урл
 * @returns {XMLHttpRequest}
 */
Proxy.prototype.createRequest = function(url, callbackSuccess, callbackError) {	
	this.url = url;
	this.callbackSuccess = callbackSuccess;
	this.callbackError = callbackError;
	
	this.xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4) {
			if(this.status == 200) {
				if(!this.scope.callbackSuccess)
					return;
				
				this.scope.callbackSuccess(this.responseText, this);
			} else {
				if(!this.scope.callbackError)
					return;
				
				this.scope.callbackError(this.responseText, this);
			}
		}	
	};
	
	this.xmlhttp.open(this.method, this.url, true);
	
	return this;
};

Proxy.prototype.addHeader = function(name, value) {
	this.xmlhttp.setRequestHeader(name, value);
	return this;
};

Proxy.prototype.setMethod = function(method) {
	this.method = method;
	return this;
};



/**
 * Отправляет запрос на сервер
 * @param {String} params - данные которые идут в теле запроса(POST)
 * @returns {undefined}
 */
Proxy.prototype.send = function(params) {	
	this.xmlhttp.send(params);
};


/**
 * 
 * @returns {undefined}
 */
function Controller() {
};


/**
 * Служебный класс конвертер в объекты
 * 
 */
function Converter() {
};

/**
 * 
 * @param {type} json
 * @returns {@exp;JSON@call;parse}
 */
Converter.jsonToObject = function(json) {
	var result;
	try {
		result = JSON.parse(json);
	} catch(e) {
		result = undefined;
	}
	
	return result;
};

