
interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer:AudioPlayer ={
    audioVolume:90,
    songDuration:100,
    song: 'Song',
    details: {
        author: 'Ed Sheeran',
        year: 2019
    }
}

const{ song:anotherSong,songDuration:duration,details }= audioPlayer;
const {author} = details;

const song = 'New Song';

console.log(song);
console.log('Song: ',anotherSong);
console.log('Duration: ',duration);
console.log('Author: ',author);

export{}