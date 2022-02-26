let div = document.createElement('ol'); 
let vis =document.createElement('li') 
 
let textNode = document.createTextNode('меня фигура, как у бога! Правда, как у буддистского, но разве это имеет значение? '); 
document.body.append(div); 
div.append(vis); 
vis.append(textNode) 
let giv = document.createElement('li'); 
let textBode = document.createTextNode(' Жена заявляет мужу: — Я подаю на развод. Машины делим пополам: мне «Лексус», тебе стиральную.'); 
div.append(giv); 
giv.append(textBode) 
let vpn = document.createElement('li') 
let textdode = document.createTextNode('Работа с красивыми женщинами теоретически возможна, но на практике всё время стоит!'); 
div.append(vpn) 
vpn.append(textdode) 
 
vis.classList.add('goose'); 
let goose = document.querySelector('.goose'); 
goose.style.color = "green" 
 
giv.classList.add('boose'); 
let boose = document.querySelector('.boose'); 
boose.style.color = "blue" 
 
vpn.classList.add('noose'); 
let noose = document.querySelector('.noose'); 
noose.style.color = "red"