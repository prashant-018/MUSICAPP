// Get references to DOM elements
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Set the progress bar max value when the audio metadata is loaded
song.onloadedmetadata = function () {
    progress.max = song.duration;
};

// Update the progress bar as the song plays
song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

// Play/Pause functionality
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        // Pause the song
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        // Play the song
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

// Update the song's current time when the user interacts with the progress bar
progress.oninput = function () {
    song.currentTime = progress.value;
};
