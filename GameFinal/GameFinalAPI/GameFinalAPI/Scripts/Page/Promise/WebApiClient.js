class WebApiClient {
    constructor(mock) {
        this.mock = mock;
    }

    getGames() { 
        if (!this.mock) {
            const promise = $.ajax({
                url: 'http://localhost:52383/api/games/'
            });
            return promise;
        } else {
            const promise = new Promise(function (resolve, rejected) {
                const games = [{ ID: 1, GameType: "Brasileirao", Player1: "Santos", Player2: "Cruzeiro", Winner_is: "Cruzeiro" },
                { ID: 1, GameType: "Brasileirao", Player1: "Flamengo", Player2: "Vasco", Winner_is: "Flamengo" }];
                setTimeout(() => { resolve(games), 3000 });
            });
            return promise;

        }
    }
}