function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
}

function strong(value) {
    return '<strong>' + value + '</strong>';
}

var pImportant = document.querySelector('p.important');
pImportant = strong(pImportant);
updateInnerHTML('p.important', pImportant.innerHTML);

let h1 = document.querySelector('h1');
h1.innerHTML = 'Hello';