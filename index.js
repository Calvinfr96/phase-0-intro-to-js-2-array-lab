// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newCats = cats.slice();
    newCats.push(name)
    return newCats;
}

function prependCat(name) {
    const newCats = cats.slice();
    newCats.unshift(name)
    return newCats;
}


function removeLastCat() {
    const lastElement = cats.length - 1; //index of last element
    const newCats = cats.slice(0, lastElement)
    return newCats
}

function removeFirstCat() {
    const catsLength = cats.length;
    const newCats = cats.slice(1, catsLength)
    return newCats;
}
