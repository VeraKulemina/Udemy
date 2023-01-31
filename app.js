function random(array) {
    const indx = Math.floor(Math.random() * array.length);
    return array[indx];
}

function getCard() {
    let a= [1,2,3,4,5,6];
    let b= [7,8,9,10,11];
    return {value : random(a), suit : random(b)};
}