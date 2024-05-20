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

Именование констант должно быть говорящем за себя,
по имени должно быть понятно какой элемент в константе хранится.

На проверку присылайте ссылку на текущую ветку,
после принятия работы куратором ветку сливаем в ветку dev
и исходную ветку удаляем. */

const modal = document.querySelector('.modal');
console.log('modal: ', modal);

modal.classList.add('active');
console.log('modal: ', modal);
console.log(modal.outerHTML);

const title = document.querySelector('.modal-box__title-text');
console.log('title: ', title);
// console.log(title.outerHTML);

const buttonId = document.querySelector('.modal-box__title-button');
console.log('buttonId: ', buttonId);

const formBox = document.querySelectorAll('.modal-box__form');
console.log('formBox: ', formBox);

const checkbox = document.querySelectorAll('.modal-box__form-checkbox');
console.log('checkbox: ', checkbox);

const inputCheckBox = document.querySelector('.inputcheckbox');
console.log('inputCheckBox: ', inputCheckBox);

const priceAll = document.querySelector('.modal-box__form-price');
console.log('priceAll: ', priceAll);

const id = document.getElementById('modal');
console.log('id: ', id);


