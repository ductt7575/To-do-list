const $ = document.querySelector.bind(document);

const listContainer = $('.list-container');
const inputBox = $('#input-box');

const USER_NAME = 'TRONG_DUC_TODO';

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveDate();
}

listContainer.addEventListener(
    'click',
    function (e) {
        console.log(e.target.tagName);
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            saveDate();
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            saveDate();
        }
    },
    false,
);

function saveDate() {
    localStorage.setItem(`${USER_NAME}`, listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem(`${USER_NAME}`);
}
showTask();
