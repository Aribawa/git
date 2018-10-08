const button = document.getElementById("getGames");
const url = 'http://localhost:52383/api/games/';

let games = {
    next: (value) => {
        console.log(value);
        const list = value.response;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            for (var field in item) {
                document.getElementById("result").innerHTML += field + " : " + item[field] + ", "
            }
            document.getElementById("result").innerHTML += "<br>"
        }
    }
}

function getGames() {
    console.log("Reactive Get Working")
    Rx.Observable.ajax(url).subscribe(games); 
}