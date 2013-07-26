var proxy = new Proxy();

proxy.setMethod('POST').
		//createRequest('https://10.1.193.234/api/application/setup.php',
		createRequest('https://10.1.193.234/',
	function(text) {
		var obj = Converter.jsonToObject(text);
		if(!obj)
			console.error('Error');
		else
			console.log(obj);
}, function(text) {
		debugger;
		console.log(text);
//}).send('client=%5B%22ExtJS%22%2C%22Windows%22%2C%22Desktop%22%5D&app=mealtime');
}).
addHeader('Content-Type', 'application/x-www-form-urlencoded').
send('client=%5B%22ExtJS%22%2C%22Windows%22%2C%22Desktop%22%5D&app=mealtime');

//proxy.createRequest('https://theoldreader.com/accounts/ClientLogin',
//	function(text) {
//		console.log(text);
//}).send('client=YourAppName&accountType=HOSTED_OR_GOOGLE&service=reader&Email=alexandr.khomenock@gmail.com&Passwd=psyhoz');
