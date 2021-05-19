var characters = [ 
    'media/profilePics/profilePicPlaceholder.png',
    'media/profilePics/classmate1.png',
    'media/profilePics/classmate2.png',
    'media/profilePics/classmate3.png',
    'media/profilePics/classmate4.png',
    'media/profilePics/classmate5.png',
    'media/profilePics/classmate6.png',
    'media/profilePics/classmate7.png',
    'media/profilePics/classmate8.png',
    'media/profilePics/classmate9.png',
    'media/profilePics/classmate10.png',
    'media/profilePics/classmate11.png',
    'media/profilePics/classmate12.png',
    'media/profilePics/classmate13.png',
    'media/profilePics/classmate14.png',
    'media/profilePics/classmate15.png',
    'media/profilePics/classmate16.png',
    'media/profilePics/classmate17.png',
    'media/profilePics/classmate18.png',
    'media/profilePics/classmate19.png',
    'media/profilePics/classmate20.png',
    'media/profilePics/classmate21.png',
    'media/profilePics/classmate22.png',
    'media/profilePics/classmate23.png',
    'media/profilePics/classmate24.png',
    'media/profilePics/classmate25.png',
    'media/profilePics/classmate26.png',
    'media/profilePics/classmate27.png'
];

var charactersPanel = document.getElementById('selectionBody');

for (path of characters) {
    var divProfile = document.createElement('div');
    var img = document.createElement('img');
    img.src = path;
    if (path !== characters[0]) {
        img.className = 'unselectable';
    }
    divProfile.className = 'characterProfile';
    divProfile.appendChild(img);
    charactersPanel.appendChild(divProfile);
}