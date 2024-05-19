/* eslint-disable max-len */
'use strict';

/* В репозитории с проектом CRM (который верстали в предыдущем модуле)
Создайте новую ветку для этого урока, подключите js файл к странице
Для модального окна добавьте класс модификатор который меняет свойство
display: none; на display: flex;
в константы получите элементы из модального окна

1. Заголовок
2. Кнопка возле id и сам id
3. Форма
4. Чекбокс и  Поле рядом с чекбоксом
5. Итоговую стоимость

Именование констант должно быть говорящем за себя, по имени должно быть понятно какой элемент в константе хранится.

На проверку присылайте ссылку на текущую ветку, после принятия работы куратором ветку сливаем в ветку dev и исходную ветку удаляем. */

const element = document.querySelector('.modal');
console.log('element: ', element);

element.classList.add('activ');

// console.log(element.outerHTML);

const title = document.querySelector('.modal-box__title-text');
console.log('title: ', title);
// title.innerHTML = '<a href="https://www.google.com" target="_blank">Ссылка</a>';

// console.log(title.outerHTML);
// title.style.color = 'green';
const box = document.querySelectorAll('.modal-box__form');
console.log('box: ', box);


const checkbox = document.querySelectorAll('.modal-box__form-checkbox');
console.log('checkbox: ', checkbox);

const inputCheckBox = document.querySelector('.inputcheckbox');
console.log('inputCheckBox: ', inputCheckBox);

const id = document.querySelectorAll('id');
console.log('id: ', id);

const price = document.querySelector('.modal-box__form-price');
console.log('price: ', price);


