var url = 'http://localhost:52383/api/games/' 


function putGame() {
    var req = new XMLHttpRequest();
    var id = document.getElementById("inputGameId")

    req.open('PUT', url + id.value);
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function () {
        console.log("Game Updated");
        document.getElementById("result").innerText = "Game Updated";
        alert('Game Updated!')
        
    }
    req.onerror = function () {
        alert('error')
    }
    var game = {
        Id: document.getElementById("gameId").value,
        GameType: document.getElementById("gameType").value,
        Player1: document.getElementById("player1").value,
        Player2: document.getElementById("player2").value,
        Winner_is: document.getElementById("winner_Is").value
    }
    req.send(JSON.stringify(game));
}


function putGameJQuery() {
    var id = $("#inputGameID").val()
    
    var game = {
        Id: id,
        GameType: $("#gameType").val(),
        Player1: $("#player1").val(),
        Player2: $("#player2").val(),
        Winner_is: $("#winner_Is").val()
    }
    
    var ajaxPostDataConfig = {
        type: "PUT",
        url: url + id,
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


