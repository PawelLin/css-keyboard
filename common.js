
function number2letter () {
    document.getElementById('keyboard-letter').style.display = 'block'
    document.getElementById('keyboard').style.display = 'none'
}
function letter2number () {
    document.getElementById('keyboard').style.display = 'block'
    document.getElementById('keyboard-letter').style.display = 'none'
}

function fullScreen (view) {
    window.parent.location.href = view + '.html'
}
function exit() {
    window.parent.location.href = '../index.html'
}