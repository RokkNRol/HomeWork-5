document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

let menu = document.querySelector('.menu'),
    menuLi = document.querySelectorAll('.menu-item'),
    column = document.querySelectorAll('.column'),
    title = document.getElementById('title').textContent = 'МЫ продаем только оригинальную технику',
    adv = document.querySelector('.adv'),
    promp = document.getElementById('prompt'),
    create = document.createElement('li');



let delLi = menu.removeChild(menuLi[1]);
menu.insertBefore(delLi, menuLi[3]);
menu.appendChild(create).classList.add('menu-item');
create.textContent = 'ПЯтый пункт';
column[1].removeChild(adv);

let user = prompt('Ваше мнение о технике?', '');
promp.textContent = user;