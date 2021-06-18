var insignias = [
    {
        "name": "Súper poder para leer mapas",
        "picture": "media/icons/badges/badge1.png",
        "completed": "[0/10]"
    }, {
        "name": "Súper poder para conocer el nombre de un país y su capital",
        "picture": "media/icons/badges/badge2.png",
        "completed": "[0/10]"
    }, {
        "name": "Súper poder para terminar tareas",
        "picture": "media/icons/badges/badge3.png",
        "completed": "[0/10]"
    }, {
        "name": "Súper poder para entregar todo a tiempo",
        "picture": "media/icons/badges/badge4.png",
        "completed": "[0/10]"
    }, {
        "name": "Súper poder para conocer los tipos de paisajes",
        "picture": "media/icons/badges/badge5.png",
        "completed": "[0/10]"
    }, {
        "name": "Súper poder para conocer la historia del lugar",
        "picture": "media/icons/badges/badge6.png",
        "completed": "[0/10]"
    }, {
        "name": "Súper poder para entender a los pueblos y sus costumbres",
        "picture": "media/icons/badges/badge7.png",
        "completed": "[0/10]"
    }
];

var insigniaPanel = document.getElementById('insigniaPanel');

for (insignia of insignias) {
    var div = document.createElement('div');
    var divText = document.createElement('div');
    var divText2 = document.createElement('div');
    var pCompleted = document.createElement('p');
    var pName = document.createElement('p');
    var tName = document.createTextNode(insignia['name']);
    var tCompleted = document.createTextNode(insignia['completed']);
    var img = document.createElement('img');
    img.src = insignia['picture'];
    img.className = 'insigniaImg';
    div.className = 'insignia';
    divText.className = 'insigniaText';
    divText2.className = 'insigniaText2';
    pName.className = 'insigniaName';
    pCompleted.className = 'insigniaCompleted';
    pCompleted.appendChild(tCompleted);
    pName.appendChild(tName);
    divText.appendChild(pName);
    divText2.appendChild(pCompleted);
    div.appendChild(img);
    div.appendChild(divText);
    div.appendChild(divText2);
    insigniaPanel.appendChild(div);
}