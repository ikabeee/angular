interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = "New Song";
console.log(`Song: ${song}`);

// Destructuring
// const { song: anotherSong, songDuration: duration, details } = audioPlayer;
//Details properties
// const { author, year } = details;
// console.log(`Author: ${author}`);
// console.log(`Year: ${year}`);

// audioPlayer properties
// console.log(`Song: ${anotherSong}`);
// console.log(`Duration: ${duration}`);

// Destructuring arrays
const [p1, p2, p3 = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log(`Third character: ${p3}`);

export {}