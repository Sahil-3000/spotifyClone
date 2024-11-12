const playlist = [
    {
        title: "Jo Tum Mere Ho",
        artist: "Anuv Jain",
        cover: "track1.jpg", // Replace with actual image path
        audio: "audio1.mp3"   // Replace with actual audio path
    },
    {
        title: "Fly Karke",
        artist: "SABBA, Jasmeen",
        cover: "track2.jpg", // Replace with actual image path
        audio: "audio2.mp3"   // Replace with actual audio path
    },
    {
        title: "Saadiyan Gallan 3",
        artist: "HUSTINDER, Black",
        cover: "track3.jpg", // Replace with actual image path
        audio: "audio3.mp3"   // Replace with actual audio path
    }
];
let currentTrackIndex = 0;
let isPlaying = false;
let audio = new Audio(playlist[currentTrackIndex].audio); // Initialize with the first track

// Update loadTrack to handle audio source
function loadTrack(trackIndex) {
    const track = playlist[trackIndex];
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    trackCover.src = track.cover;

    // Load new audio source
    audio.src = track.audio;
    audio.load();
}

// Toggle play/pause functionality
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = '▶️';
        isPlaying = false;
    } else {
        audio.play();
        playPauseButton.textContent = '⏸️';
        isPlaying = true;
    }
}

// Play the next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    isPlaying = true;
    audio.play();
    playPauseButton.textContent = '⏸️';
}

// Play the previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    isPlaying = true;
    audio.play();
    playPauseButton.textContent = '⏸️';
}

// Adjust volume
function setVolume() {
    const volume = volumeSlider.value / 100;
    audio.volume = volume; // Set the volume of the audio object
}

// Event listeners
playPauseButton.addEventListener('click', togglePlayPause);
document.querySelector('.playback-controls button:nth-child(1)').addEventListener('click', prevTrack);
document.querySelector('.playback-controls button:nth-child(3)').addEventListener('click', nextTrack);
volumeSlider.addEventListener('input', setVolume);

