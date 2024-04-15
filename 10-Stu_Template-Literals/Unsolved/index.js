// music should be an object with title, artist, and album properties
const music = {
  title: "Old Town Road",
  artist: "Lil Nas X",
  album: "7",
  // code here
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `
  <div>
    <h1>${music.title}</h1>
    <h2>${music.artist}</h2>
    <h3>${music.album}</h3>
    </div>
    `;

console.log(songSnippet)

