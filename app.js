function changeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }

    const element = document.querySelector('#canvas');
    element.style.backgroundColor = color;
}