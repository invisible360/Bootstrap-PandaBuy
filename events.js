/*  *///task-1
// console.log('connected')

// ============================================

//task-2
const h1Collection = document.getElementsByTagName('h1');
const headings = [h1Collection[3], h1Collection[7], h1Collection[11], h1Collection[15]];
for (const heading of headings) {
    heading.style.color = 'blue';
}

// ============================================

//task-3
document.getElementById('backpack').style.backgroundColor = 'tomato';

// ============================================

//task-4
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

// ============================================

//task-6

/* const btns = document.getElementsByClassName ('btn')
const selectedBtns = [btns[3],btns[4],btns[5],btns[6],btns[7],btns[8]];

for (const btn of selectedBtns) {
    btn.addEventListener('click', function (event) {
        console.log (event.target);
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    })
} */


//task-6 event delegate [id k eventlisterner diye tar parent k remove korsi-ete proble, hoilo parent er moddeh j kono ekta event korle seita tar parent a giye child k remove kore dibe]
/* document.getElementById('shoe').addEventListener('click', function (event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
});

document.getElementById('backbag').addEventListener('click', function (event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}); */


//task-6 using delegate and function [delegate er problem]
/* removeBuyNowBtn('shoe', 'backbag');

function removeBuyNowBtn(id1, id2) {
    document.getElementById(id1).addEventListener('click', function (event) {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    });
    document.getElementById(id2).addEventListener('click', function (event) {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    });
} */

//task-6 using style display none and event 
/* removeBuyNowBtn('shoe', 'backbag');

function removeBuyNowBtn(id1, id2) {
    document.getElementById(id1).addEventListener('click', function (event) {
        removebtn ();
    });
    document.getElementById(id2).addEventListener('click', function (event) {
        removebtn ();
    });
}

function removebtn() {
    event.target.parentNode.style.display = 'none';
}
 */
//task-6 using style display none 
const btnss= document.getElementsByClassName ('cart-btn')

for (let i = 0; i <btnss.length; i++ ){
    btnss[i].addEventListener ('click', function () {
        btnss[i].style.display = 'none';
    });
}

// ============================================

//task-7

document.getElementById ('subs-field').addEventListener ('keyup', function (event) {
    console.log (event.target.value);
    if (event.target.value === 'email') {
        document.getElementById ('subs-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById ('subs-btn').setAttribute ('disabled', true);

    }

})


// ============================================


//task-8

document.getElementById ('img-change').addEventListener ('mouseenter', function () {
    document.getElementById ('img-change').removeAttribute ('src');
    document.getElementById ('img-change').setAttribute ('src', 'images/shoes/shoe-3.png');
})
document.getElementById ('img-change').addEventListener ('mouseleave', function () {
    document.getElementById ('img-change').removeAttribute ('src');
    document.getElementById ('img-change').setAttribute ('src', 'images/shoes/shoe-1.png');
})

// ============================================

//task - 9

//event bubling
document.getElementById ('subscribe').addEventListener ('dblclick', function () {
    document.getElementById ('subscribe').style.backgroundColor = '#6c9c85';
});
document.getElementById ('stop-prop').addEventListener ('dblclick', function (event) {

    event.stopPropagation();
})