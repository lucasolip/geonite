var insignias = [
    {
        "name": "Súper poder para leer un mapa",
        "picture": "media/badges/insignia1.png"
    }, {
        "name": "Súper poder para conocer el nombre de un país y su capital",
        "picture": "media/badges/insignia2.png"
    }, {
        "name": "Súper poder para hacer tareas",
        "pciture": "media/badges/insignia3.png"
    }, {
        "name": "Súper poder para entregar todo a tiempo",
        "picture": "media/badges/insignia4.png"
    }, {
        "name": "Súper poder para conocer los tipos de paisajes",
        "picture": "media/badges/insignia5.png"
    }, {
        "name": "Súper poder para ...",
        "picture": "media/badges/insignia6.png"
    }, {
        "name": "Súper poder para ...",
        "picture": "media/badges/insignia7.png"
    }, {
        "name": "Súper poder para ...",
        "picture": "media/badges/insignia8.png"
    }
];

var insigniaPanel = document.getElementById('insigniaPanel');

for (insignia of insignias) {
    var div = document.createElement('div');
    var divText = document.createElement('div');
    var pName = document.createElement('p');
    var tName = document.createTextNode(insignia['name']);
    div.className = 'insignia';
    divText.className = 'insigniaText';
    pName.className = 'insigniaName';
    pName.appendChild(tName);
    divText.appendChild(pName);
    div.appendChild(divText);
    insigniaPanel.appendChild(div);
}