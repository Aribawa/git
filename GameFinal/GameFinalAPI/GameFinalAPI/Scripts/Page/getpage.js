function getGames() {
    
    var req = new XMLHttpRequest();
    {
        var url = 'http://localhost:52383/api/games/'
        req.open('GET', url)
        req.onload = function () {
            var list = JSON.parse(req.response)
            console.log(req.reponse)
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                for (var field in item) {
                    document.getElementById("result").innerHTML += field +
                        " : " + item[field] + ", "
                }
                document.getElementById("result").innerHTML += "<br>"
            }
        }
    }
    req.onerror = function () {
        alert('error')
    }
    req.send()
}

function getGameById() {
    var req = new XMLHttpRequest();
    var the_id = document.getElementById("inputGameId").value ;
    
    var url = 'http://localhost:52383/api/games/' + the_id
    console.log(the_id)
    req.open('GET', url);
    req.onload = function () {
        
        var game = JSON.parse(req.response);
        console.log(game);
        document.getElementById("gameType").value = game['GameType'];
        document.getElementById("player1").value = game['Player1'];
        document.getElementById("player2").value = game['Player2'];
        document.getElementById("winner_Is").value = game['Winner_Is'];
    }
    req.onerror = function () {
        alert('error')
    }
    req.send();
}

function getByPlayer() {
    var player = document.getElementById("inputPlayerName");
    var req = new XMLHttpRequest();
    var url = 'http://localhost:52383/api/games/'
    req.open('GET', url + player.value);
    req.onload = function () {
        name.value = "";
        var list = JSON.parse(req.response);
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            for (var field in item) {
                document.getElementById("result").innerHTML += field +
                    " : " + item[field] + ", "
            }
            document.getElementById("result").innerHTML += "<br>"
        }
    }
    req.onerror = function () {
        alert('error')
    }
    req.send()
}



function getGamesJQuery() {
    $.ajax({
        url: 'http://localhost:52383/api/games/'
    }).then(

        function (game) {
            console.log(game)

            for (var i = 0; i < game.length; i++) {
                var item = game[i];
                for (var field in item) {
                    $('#result').append(" " + field +
                        " : " + item[field] + ", ")
                }
                $('#result').append("<br>")
            }
        }
    );
}

function getGameByIdJQuery() {
    var id = $("#inputGameId").val();
    console.log(id);
    $.ajax({
        url: 'http://localhost:52383/api/games/' + id
    }).then(
        function (game) {
            console.log(game)
            $("#gameId").val(game.gameId);
            $("#gameType").val(game.Gametype);
            $("#player1").val(game.Player1);
            $("#player2").val(game.Player2);
            $("#winner_Is").val(game.Winner_Is);
        }
    );
}

function getByPlayerJQuery() {
    var player = $("#inputPlayerName").val();
    console.log(player);
    $.ajax({
        url: 'http://localhost:52383/api/games/'
    }).then(
        function (game) {
            console.log(game)

            for (var i = 0; i < game.length; i++) {
                var item = game[i];
                for (var field in item) {
                    $('#result').append(" " + field +
                        " : " + item[field] + ", ")
                }
                $('#result').append("<br>")
            }
        }
    );
}


