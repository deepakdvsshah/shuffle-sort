const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
const numberBGColor = ["", "#6F98A8", "#2B8EAD", "#2F454E", "#2B8EAD", "#2F454E", '#BFBFBF', '#BFBFBF', "#6F98A8", "#2F454E"]
let ul

// shuffle numbers
function shuffle() {
    fillUL(ul.childNodes);
}

// this function sets a unique id for each list item, in the form 'li0' to 'li8'
const createElements = () => {
    const arr = [...numbers];
    const cont = document.getElementById('numbers-container');

    // create ul element and set its attributes.
    ul = document.createElement('ul');
    ul.setAttribute('id', 'list');

    for (let i = 0; i <= arr.length - 1; i++) {
        const li = document.createElement('li'); // create li element.
        li.setAttribute('id', `li${i}`);
        ul.appendChild(li); // append li to ul.
    }
    cont.appendChild(ul);
    fillUL(ul.childNodes);
}

// fill text and background-color for UL
const fillUL = (items) => {
    let shuffled = shuffleArr(numbers);
    setTextAndBg(items, shuffled);
}

// shuffle the array
const shuffleArr = (arr) => {
    const copy = [...arr];
    // loop over half or full of the array
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// sort the array
const sort = () => {
    setTextAndBg(ul.childNodes, numbers);
}

// set text and background-color for li element
const setTextAndBg = (items, arr) => {
    items.forEach((item, i) => {
        item.innerText = arr[i];
        item.setAttribute("style", `background-color: ${numberBGColor[item.innerText]}`);
    })
}