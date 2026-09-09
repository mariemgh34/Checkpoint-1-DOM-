
let plusBtn = document.getElementsByClassName('fa-plus-circle');
let trashBtn = document.getElementsByClassName('fa-trash-alt');
let heartBtn = document.getElementsByClassName('fa-heart');
let minusBtn = document.getElementsByClassName('fa-minus-circle');
let quantity = document.getElementsByClassName('quantity');
let unitPrice = document.getElementsByClassName('unit-price');
let total = document.querySelector('.total');



for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener('click', function() {
        quantity[i].innerText = Number(quantity[i].innerText) + 1;
        totalPrice();
    });
}



for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].addEventListener('click', function() {
        if (Number(quantity[i].innerText) > 0) {
            quantity[i].innerText = Number(quantity[i].innerText) - 1;
        }
        totalPrice();
    });
}

for (let i = 0; i < trashBtn.length; i++) {
    trashBtn[i].addEventListener('click', function() {
        trashBtn[i].closest('.card-container').remove();
        totalPrice();
    });
}


// HEART BUTTON
for (let i = 0; i < heartBtn.length; i++) {
    heartBtn[i].addEventListener('click', function() {
        heartBtn[i].classList.toggle('redHeart');

    });
}


function totalPrice() {
    let sum = 0;
    for (let i = 0; i < quantity.length; i++) {
        let price = Number(unitPrice[i].innerText.replace('$', ''));
        let qty = Number(quantity[i].innerText);
        sum = sum + price * qty;
    }
    total.innerText = sum + " $";
}