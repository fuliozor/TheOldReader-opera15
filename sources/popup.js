var proxy = new Proxy();

proxy.createRequest('https://theoldreader.com/accounts/ClientLogin',
	function(text) {
		console.log(text);
}).send('client=YourAppName&accountType=HOSTED_OR_GOOGLE&service=reader&Email=alexandr.khomenock@gmail.com&Passwd=psyhoz');