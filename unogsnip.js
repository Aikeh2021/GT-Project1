const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rapidapi.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3AUS&p=1&t=ns&st=adv",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
		"x-rapidapi-key": "a9e16f87c2msh992112318e316a7p195c67jsn4244d11ec88c"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});