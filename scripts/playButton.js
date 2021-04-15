playButton = document.createElement('button');
playButton.className = "playButton";
playButton.appendChild(document.createTextNode("JUGAR"));

var setPlayButton = function(event) {
    missions = document.getElementsByClassName("mission");
    for (mission of missions) {
        if (mission.contains(playButton)) {
            mission.removeChild(playButton);
        }
    }
    event.target.appendChild(playButton);
}

missions = document.getElementsByClassName("mission");
for (mission of missions) {
    mission.addEventListener('click', setPlayButton);
}