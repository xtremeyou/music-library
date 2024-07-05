const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
  printPlaylists: function () {
    let playlist = this.playlists.p01;
    console.log(
      `${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`
    );

    let playlist2 = this.playlists.p02;
    console.log(
      `${playlist2.id}: ${playlist2.name} - ${playlist2.tracks.length} tracks`
    );
  },

  printTracks: function () {
    let playlist2 = this.tracks;
    console.log(
      `t01: ${playlist2.t01.name} by ${playlist2.t01.artist} (${playlist2.t01.album})`
    );

    console.log(
      `t02: ${playlist2.t02.name} by ${playlist2.t02.artist} (${playlist2.t02.album})`
    );

    console.log(
      `t03: ${playlist2.t03.name} by ${playlist2.t03.artist} (${playlist2.t03.album})`
    );
  },
  printPlaylist: function () {
    playlistId = this.tracks;
    console.log(
      `p01: ${library.playlists.p01.name} - ${library.playlists.p01.tracks.length} tracks`
    );
    console.log(
      `t01: ${playlistId.t01.artist} by ${playlistId.t01.name} (${playlistId.t01.album})`
    );
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    const trackToAdd = this.tracks[trackId];
    const newPlaylist = this.playlists[playlistId];
  },
  generateUid: function () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },
  addTrack: function(name, artist, album) {
    const id = this.generateUid();

    const newTrack = {
      id: id,
      name: name,
      artist: artist,
      album: album,
    };
    this.tracks[id] = newTrack;
  },
  addPlaylist: function(name) {
    const id = this.generateUid();

    const newPlaylist = {
      id: id,
      name: name,
      tracks: [],
    };
    library.playlists[id] = newPlaylist;

  },
 };
library.printPlaylists();
library.printTracks();
library.printPlaylist("po1");
library.addTrackToPlaylist("to3", "po1");
library.generateUid();
library.addTrack("Rockstar", "Nickelback", "All The Right Reasons");
library.addPlaylist("My Coding PlayList");
console.log(library)

