function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
    document.getElementById("serverTitle").innerHTML = servername;
    document.getElementById("mapName").innerHTML = "Currently playing on " + mapname;
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
    log(str);
};
