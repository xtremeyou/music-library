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
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const printPlaylists = function (library) {
  let playlist = library.playlists.p01;
  console.log(
    `${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`
  );

  let playlist2 = library.playlists.p02;
  console.log(
    `${playlist2.id}: ${playlist2.name} - ${playlist2.tracks.length} tracks`
  );
};
printPlaylists(library);

// // prints a list of all tracks, using the following format:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function (library) {
  let playlist2 = library.tracks;
  console.log(
    `t01: ${playlist2.t01.name} by ${playlist2.t01.artist} (${playlist2.t01.album})`
  );

  console.log(
    `t02: ${playlist2.t02.name} by ${playlist2.t02.artist} (${playlist2.t02.album})`
  );

  console.log(
    `t03: ${playlist2.t03.name} by ${playlist2.t03.artist} (${playlist2.t03.album})`
  );
};
printTracks(library);

// // prints a list of tracks for a given playlist, using the following format:
// // p01: Coding Music - 2 tracks
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  playlistId = library.tracks;
  console.log(
    `p01: ${library.playlists.p01.name} - ${library.playlists.p01.tracks.length}`
  );

  console.log(
    `t01: ${playlistId.t01.artist} by ${playlistId.t01.name} (${playlistId.t01.album})`
  );
};
printPlaylist(library);
// // adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  const trackToAdd = library.tracks[trackId];
  const newPlaylist = library.playlists[playlistId];
};
addTrackToPlaylist("to3", "po1");

// // generates a unique id
// // (already implemented: use this for addTrack and addPlaylist)
const generateUid = function (addTrack, addPlaylist) {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
console.log(generateUid(library));
// // adds a track to the library
const addTrack = function (name, artist, album) {
  const id = generateUid();

  const newTrack = {
    id: id,
    name: name,
    artist: artist,
    album: album,
  };
  library.tracks[id] = newTrack;
};
addTrack("Rockstar", "Nickelback", "All The Right Reasons");
console.log(library.tracks);

// // adds a playlist to the library
const addPlaylist = function (name) {
  const id = generateUid();

  const newPlayliist = {
    id: id,
    name: name,
    tracks: [],
  };
  library.playlists[id] = newPlayliist;
};
addPlaylist("My Coding Playlist");
console.log(library.playlists);
