var playlist = {}
var playlist = new Object();
var playlist = {dagar: "yaman"}

function updatePlayist(obj, artistName, songTitle) {
  return Object.assign({}, obj, { [artisName]: songTitle });
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}