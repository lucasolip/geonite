playButton = document.createElement('button');
playButton.className = "playButton";
playButton.appendChild(document.createTextNode("JUGAR"));

var setPlayButton = function(event) {
    if (event.target === playButton) {
        return;
    }
    missions = document.getElementsByClassName("mission");
    for (mission of missions) {
        if (mission.contains(playButton)) {
            mission.removeChild(playButton);
        }
    }
    target = event.target;
    while (target.className !== 'mission') {
        target = target.parentElement;
    }
    target.appendChild(playButton);
}

missions = document.getElementsByClassName("mission");
for (mission of missions) {
    mission.addEventListener('click', setPlayButton);
}