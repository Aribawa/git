var url = 'http://localhost:52383/api/games/'


function postGame() {
    var req = new XMLHttpRequest();

    req.open('POST', url)
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function () {
        console.log(req.response);
        document.getElementById("result").innerText = "New Gamematch Created";
        alert('Game Created!')
    }
    req.onerror = function () {
        alert('error')
    }
    var game = {

        GameType: document.getElementById("gameType").value,
        Player1: document.getElementById("player1").value,
        Player2: document.getElementById("player2").value,
        Winner_is: document.getElementById("winner_Is").value
    }
    req.send(JSON.stringify(game));
}

function postGameJQuery() {
    

    var game = {

        GameType: $("#gameType").val(),
        Player1: $("#player1").val(),
        Player2: $("#player2").val(),
        Winner_is: $("#winner_Is").val()
    }
    

    var ajaxPostDataConfig = {
        type: "POST",
        url: url,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(game)
    }

    $.ajax(ajaxPostDataConfig).then(

        function (data) {
            console.log(data)
        }
    ).fail(

        function (err) {
            console.error(err)
        }
    )
}



