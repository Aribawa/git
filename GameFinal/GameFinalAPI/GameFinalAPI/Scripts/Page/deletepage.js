var url = 'http://localhost:52383/api/games/'

function deleteGame() {
    var id = document.getElementById("inputGameId");
    var req = new XMLHttpRequest();
     
    req.open('DELETE', url + id.value);
    req.onload = function () {

        document.getElementById("result").innerText = "Game deleted";
    }
    req.onerror = function () {
        alert('error')
    }
    req.send();
}

function deleteGameJQuery() {

    var the_id = $("#inputGameId").val()
    var url_web_api = 'http://localhost:52383/api/games/' + the_id


    var ajaxPostDataConfig = {
        type: "DELETE",
        url: url_web_api,
    }

    $.ajax(ajaxPostDataConfig).then(
        function (resp) {
            console.log(resp)
        }
    ).fail(
        function (err) {
            console.error(err)
        }
    )


}