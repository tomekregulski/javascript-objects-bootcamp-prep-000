var playlist = {}
var playlist = new Object();
var playlist = {dagar: "yaman"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playList
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}