import 'cypress-file-upload'


function emailRamdon(chars) {
    var chars = 'abcdefghijklmnopqrstuvwxyz';
    return chars[Math.floor(Math.random()*6)] + Math.random().toString(6).substring(2,11) + '@domain.com';
}