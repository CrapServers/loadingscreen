function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    document.getElementById("serverTitle").innerHTML = servername;
    document.getElementById("mapName").innerHTML = "Currently playing on " + mapname;
    document.getElementById("statusLog").style.height = window.screen.height * 0.75 + "px"; // turns out you cant really do % stuff in divs, so this is a little hacky
};
function log(str) {
    var ln = ">" + str;
    const div = document.getElementById("statusLog");
    div.innerHTML = ln + "<br>" + div.innerHTML;
};
function SetStatusChanged(status) {
    log(status);
};
function DownloadingFile(str) {
    log("Downloading " + str);
};

