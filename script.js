// Playlist data
const playlist = [
    { title: "Jo Tum Mere Ho", artist: "Anuv Jain", cover: "track1.jpg", audio: "audio1.mp3" },
    { title: "Fly Karke", artist: "SABBA, Jasmeen", cover: "track2.jpg", audio: "audio2.mp3" },
    { title: "Ik Mutiyar Hundi Si", artist: "HUSTINDER, Black", cover: "track3.jpg", audio: "audio3.mp3" },
     { title: "Youth Flow", artist: "Arjan Dhillon", cover: "Chobbar.jpg", audio: "audio4.mp3" },
    { title: "Tyar", artist: "Arjan Dhillon", cover: "Chobbar.jpg", audio: "audio5.mp3" },
    { title: "Maavan", artist: "Arjan Dhillon", cover: "Chobbar.jpg", audio: "audio6.mp3" },
    { title: "Glorious", artist: "Arjan Dhillon", cover: "Chobbar.jpg", audio: "audio7.mp3" },
    { title: "Biography, artist: "Arjan Dhillon", cover: "Chobbar.jpg", audio: "audio8.mp3" },
    { title: "Back To Sikhi", artist: "Arjan Dhillon", cover: "Chobbar.jpg", audio: "audio9.mp3" }, 
];

let currentTrackIndex = 0;
let isPlaying = false;
let audio = new Audio(playlist[currentTrackIndex].audio);

// Element references
const nowPlayingTitle = document.querySelector('.track-title');
const nowPlayingArtist = document.querySelector('.track-artist');
const nowPlayingCover = document.querySelector('.track-info img');
const playPauseIcon = document.getElementById('play-pause-icon');
const progressSlider = document.getElementById('progress-slider');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const sidebar = document.querySelector('.current-song-cover img');
// Load track based on index
function loadTrack(trackIndex) {
    const track = playlist[trackIndex];
    nowPlayingTitle.textContent = track.title;
    nowPlayingArtist.textContent = track.artist;
    nowPlayingCover.src = track.cover;
    

    audio.src = track.audio;
    audio.load();
    sidebar.src = track.cover;
    sidebar.style.backgroundSize = "cover";           // Make sure the image covers the sidebar
    sidebar.style.backgroundPosition = "center";      // Center the image
    sidebar.style.borderRadius = "8px";               // Maintain border-radius if needed
    sidebar.style.width = "25%";
    audio.onloadedmetadata = () => {
        durationElement.textContent = formatTime(audio.duration);
        progressSlider.max = Math.floor(audio.duration);
    };
}

// Play or pause the audio
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseIcon.innerHTML = '<use href="#play-icon"></use>';
        isPlaying = false;
    } else {
        audio.play();
        playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
        isPlaying = true;
    }
}

// Move to the next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
    isPlaying = true;
}

// Move to the previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
    isPlaying = true;
}

// Set volume
function setVolume() {
    audio.volume = document.querySelector('.volume-control input').value / 100;
}

// Format time in minutes and seconds
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update progress slider and current time display
audio.ontimeupdate = () => {
    progressSlider.value = Math.floor(audio.currentTime);
    currentTimeElement.textContent = formatTime(audio.currentTime);
};

// Change track position when progress slider is moved
progressSlider.oninput = () => {
    audio.currentTime = progressSlider.value;
};

// Load the first track initially
loadTrack(currentTrackIndex);

// Event listeners for playback control icons
document.querySelector('.playback-controls svg:nth-child(1)').onclick = prevTrack;
document.querySelector('.playback-controls svg:nth-child(2)').onclick = togglePlayPause;
document.querySelector('.playback-controls svg:nth-child(3)').onclick = nextTrack;

// Automatically play the next track when the current one ends
audio.onended = () => {
    nextTrack();
};

// JavaScript code with audio functionality and progress bar

        // const playlist = [
        //     {
        //         title: "Jo Tum Mere Ho",
        //         artist: "Anuv Jain",
        //         cover: "track1.jpg",
        //         audio: "audio1.mp3"
        //     },
        //     {
        //         title: "Fly Karke",
        //         artist: "SABBA, Jasmeen",
        //         cover: "track2.jpg",
        //         audio: "audio2.mp3"
        //     },
        //     {
        //         title: "Ik Mutiyar Hundi Si",
        //         artist: "HUSTINDER, Black",
        //         cover: "track3.jpg",
        //         audio: "audio3.mp3"
        //     }
        // ];

        // let currentTrackIndex = 0;
        // let isPlaying = false;
        // let audio = new Audio(playlist[currentTrackIndex].audio);

        // const currentTrackTitle = document.getElementById('current-track-title');
        // const currentTrackArtist = document.getElementById('current-track-artist');
        // const currentTrackCover = document.getElementById('current-track-cover');
        // const nowPlayingTitle = document.getElementById('now-playing-title');
        // const nowPlayingArtist = document.getElementById('now-playing-artist');
        // const nowPlayingCover = document.getElementById('now-playing-cover');
        // const playPauseIcon = document.getElementById('play-pause-icon');
        // const progressSlider = document.getElementById('progress-slider');
        // const currentTimeElement = document.getElementById('current-time');
        // const durationElement = document.getElementById('duration');

        // function loadTrack(trackIndex) {
        //     const track = playlist[trackIndex];
        //     currentTrackTitle.textContent = track.title;
        //     currentTrackArtist.textContent = track.artist;
        //     currentTrackCover.src = track.cover;
        //     nowPlayingTitle.textContent = track.title;
        //     nowPlayingArtist.textContent = track.artist;
        //     nowPlayingCover.src = track.cover;

        //     audio.src = track.audio;
        //     audio.load();

        //     audio.onloadedmetadata = () => {
        //         durationElement.textContent = formatTime(audio.duration);
        //         progressSlider.max = Math.floor(audio.duration);
        //     };
        // }

        // loadTrack(currentTrackIndex);

        // function togglePlayPause() {
        //     if (isPlaying) {
        //         audio.pause();
        //         playPauseIcon.innerHTML = '<use href="#play-icon"></use>';
        //         isPlaying = false;
        //     } else {
        //         audio.play();
        //         playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
        //         isPlaying = true;
        //     }
        // }

        // function nextTrack() {
        //     currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        //     loadTrack(currentTrackIndex);
        //     audio.play();
        //     playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
        //     isPlaying = true;
        // }

        // function prevTrack() {
        //     currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        //     loadTrack(currentTrackIndex);
        //     audio.play();
        //     playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
        //     isPlaying = true;
        // }

        // function setVolume() {
        //     audio.volume = document.querySelector('.volume-control input').value / 100;
        // }

        // function formatTime(seconds) {
        //     const mins = Math.floor(seconds / 60);
        //     const secs = Math.floor(seconds % 60);
        //     return `${mins}:${secs < 10 ?
        //         '0' : ''}${secs}`;
        // }

        // audio.ontimeupdate = () => {
        //     progressSlider.value = Math.floor(audio.currentTime);
        //     currentTimeElement.textContent = formatTime(audio.currentTime);
        // };

        // progressSlider.oninput = () => {
        //     audio.currentTime = progressSlider.value;
        // };

        // audio.onended = () => {
        //     nextTrack(); // Automatically move to the next track when the current one ends
        // };
