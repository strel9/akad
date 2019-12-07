// Добавляем Хлебные крошки
let breadcrumbs__itemNew = document.querySelector('li.breadcrumbs__item');
let breadcrumbs__itemNew3 = breadcrumbs__itemNew.cloneNode(true);
let breadcrumbsNew = document.querySelector('.ba-breadcrumbs');
breadcrumbsNew.appendChild(breadcrumbs__itemNew3);
let breadcrumbs__linkNew = document.querySelectorAll('.ba-breadcrumbs__link');
breadcrumbs__linkNew[2].innerText = 'company';


// меняем цвет заголовков на красный
let benefitRed = document.getElementsByClassName('ba-benefit__title');
for (let i = 0; i < 3; i++) {
    benefitRed[i].style.color = 'red';
}

// добавляем порядковые цифры к заголовкам
// let h3New = document.querySelectorAll('h3');
// for (let i = 0; i < h3New.length; i++) {
//     h3New[i].innerText += ' ' + i;
// }

// let pNew = document.querySelectorAll('.ba-benefits p');

// for (let i = 0; i < pNew.length; i++) {
//     pNew[i].parentElement.classList.add('lalala');
// }


// добавляем новый атрибут к изображению
let srcNew = document.querySelectorAll('.ba-team-member img');
for (let i = 0; i < srcNew.length; i++) {
    srcNew[i].setAttribute('src', '');
}

// 

// 
