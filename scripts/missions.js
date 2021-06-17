var missionPanel = document.getElementById('missionPanel');

for (mission of missions) {
    var div = document.createElement('div');
    var divText = document.createElement('div');
    var pName = document.createElement('p');
    var pDescription = document.createElement('p');
    var tName = document.createTextNode(mission['name']);
    var tDescription = document.createTextNode(mission['description']);
    div.className = 'mission';
    divText.className = 'missionText';
    pName.className = 'missionName';
    pDescription.className = 'missionDescription';
    pName.appendChild(tName);
    pDescription.appendChild(tDescription);
    divText.appendChild(pName);
    divText.appendChild(pDescription);
    div.appendChild(divText);
    missionPanel.appendChild(div);
}