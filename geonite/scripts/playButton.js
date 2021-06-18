playButton = document.createElement('button');
playButton.className = "playButton";
playButton.appendChild(document.createTextNode("JUGAR"));

playButtonHolder = null;

var setPlayButton = function(event) {
    if (event.target === playButton) {
        return;
    }
    if (playButtonHolder) {
        playButtonHolder.removeChild(playButton);
        playButtonHolder.className = 'mission';
    }
    target = event.target;
    while (target.className !== 'mission') {
        target = target.parentElement;
    }
    target.appendChild(playButton);
    target.className = 'missionActive';
    playButtonHolder = target;
}

var goToLink = function(event) {
    var name = playButtonHolder.childNodes[0].childNodes[0].textContent;
    for (mission of missions) {
        if (mission['name'] === name) {
            window.location.href = mission['link'];
        }
    }
}

missionContainer = document.getElementsByClassName("mission");
for (mission of missionContainer) {
    mission.addEventListener('click', setPlayButton);
}
playButton.addEventListener('click', goToLink);