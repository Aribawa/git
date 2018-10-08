function WindowApi() {
    this.games = [];

    this.getGames = function () {
        const myWebApiClient = new myWebApiClient(true);

        const promiseResult = myWebApiClient.getGames();
        promiseResult.then((data) => {
            this.games = data;
            console.log(this.games);
        }, (err) => console.log(err)
        );
    }

    this.printGames = function () {
        for (var i = 0; i < this.length; i++) {
            var item = this.games[i];
            for (var field in item) {
                document.getElementById("results").innerHTML += field + " : " + item[field] + ", "
            }
            document.getElementById("results"), innerHTML += "<br>"
        }
    }
}

var windowApi = new WindowApi();