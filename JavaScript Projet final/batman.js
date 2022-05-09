var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var btn4 = document.getElementById('button4');
var btn5 = document.getElementById('button5');
var btn6 = document.getElementById('button6');

function myOverbtn1() {
    btn1.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 1), rgba(25, 88, 125, 1)';
    btn1.style.color = '#fff';
    btn1.style.fontWeight = 'bold';
}

function myLeavebtn1() {
    btn1.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(25, 88, 125, 0.4)';
    btn1.style.color = '#fff';
}

function myOverbtn2() {
    btn2.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 1), rgba(25, 88, 125, 1)';
    btn2.style.color = '#fff';
    btn2.style.fontWeight = 'bold';
}

function myLeavebtn2() {
    btn2.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(25, 88, 125, 0.4)';
    btn2.style.color = '#fff';
}

function myOverbtn3() {
    btn3.style.border = 'solid 2px white';
    btn3.style.color = '#fff';
    btn3.style.fontWeight = 'bold';
}

function myLeavebtn3() {
    btn3.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(25, 88, 125, 0.4)';
    btn3.style.color = '#fff';

}

function myOverbtn4() {
    btn4.style.border = 'solid 2px white';
    btn4.style.color = '#fff';
    btn4.style.fontWeight = 'bold';
}

function myLeavebtn4() {
    btn4.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(25, 88, 125, 0.4)';
    btn4.style.color = '#fff';

}

function myOverbtn5() {
    btn5.style.border = 'solid 2px white';
    btn5.style.color = '#fff';
    btn5.style.fontWeight = 'bold';
}

function myLeavebtn5() {
    btn5.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(25, 88, 125, 0.4)';
    btn5.style.color = '#fff';

}

function myOverbtn6() {
    btn6.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 1), rgba(137, 0, 8, 1)';
    btn6.style.color = '#fff';
    btn6.style.fontWeight = 'bold';
}

function myLeavebtn6() {
    btn6.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(137, 0, 8, 0.6)';
    btn6.style.color = '#fff';
}

let footericones = document.getElementsByClassName('footer-icones');

for (let i = 0; i < footericones.length; i++) {
    footericones[i].addEventListener('mouseover', () => {
        footericones[i].style.color = 'yellow';
    });
    footericones[i].addEventListener('mouseout', () => {
        footericones[i].style.color = 'white';

    });
}

let headericones = document.getElementsByClassName('header-icones');

for (let i = 0; i < headericones.length; i++) {
    headericones[i].addEventListener('mouseover', () => {
        headericones[i].style.color = 'yellow';
    });
    headericones[i].addEventListener('mouseout', () => {
        headericones[i].style.color = 'white';

    });
}

let menu = document.querySelectorAll('li');

menu.forEach(function(li) {
    li.addEventListener('mouseover', () => {
        li.style.textDecoration = 'underline';
    });
    li.addEventListener('mouseout', () => {
        li.style.textDecoration = 'none';
    });

});


/*$('.arrow').click(function() {
    $(this).css({
            backgroundColor: 'blue'

        },

    )
})*/

// $('.card-unique').hover(function() {
//     $('card-img-down').css({
//             display: 'block'

//         },
//         function() {
//             $('card-img-down').css({
//                 display: 'none'
//             })
//         }
//     )
// })

//animation en haut de la page

$(document).ready(function() {
    $(".box").animate({
        'left': '20px'
    })

})

/*$(document).ready(function() {
    $(".thetitle").animate({
         'left': '20%'
     })

})*/

//animation des titres

$(document).ready(function() {
    $(".thetitle").fadeIn(),
        $(".thetitle").animate({
            left: "5px"
        }, "slow")
});

$(document).ready(function() {
    $(".card-img-top").fadeIn("slow")

});

// premier slide

var slide = new Array("Batslider1.png", "Batslider2.png", "Batslider3.png", "Batslider4.png", "Batslider5.png", "Batslider6.png", "Batslider7.png", "Batslider8.png", "Batslider9.png", "Batslider10.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
    setInterval("ChangeSlide(1)", 4000);
}


//batmens hover

var actor = document.querySelector('.card-img-down');
var thehideactor = document.querySelector('.card-unique');

thehideactor.onmouseover = function() {
    actor.style.display = "block";
}

var actor1 = document.querySelector('.card-img-down1');
var thehideactor1 = document.querySelector('.card-unique1');

thehideactor1.onmouseover = function() {
    actor1.style.display = "block";
}

var actor2 = document.querySelector('.card-img-down2');
var thehideactor2 = document.querySelector('.card-unique2');

thehideactor2.onmouseover = function() {
    actor2.style.display = "block";
}

//Batvillains hover

var actor3 = document.querySelector('.card-img-down3');
var thehideactor3 = document.querySelector('.card-unique3');

thehideactor3.onmouseover = function() {
    actor3.style.display = "block";
}

var actor4 = document.querySelector('.card-img-down4');
var thehideactor4 = document.querySelector('.card-unique4');

thehideactor4.onmouseover = function() {
    actor4.style.display = "block";
}

var actor5 = document.querySelector('.card-img-down5');
var thehideactor5 = document.querySelector('.card-unique5');

thehideactor5.onmouseover = function() {
    actor5.style.display = "block";
}



// var modal = document.querySelector('.indexmodal');
// var sendmodal = document.getElementById('confbtn');

// sendmodal.onclick = function() {
//     modal.style.display = "block";
// }

//pop up box

$(document).ready(function() {
    $("#button6").click(function() {
        $(".indexmodal").show();
    })
})

$(document).ready(function() {
    $("#closemodal").click(function() {
        $(".indexmodal").hide();
    })
})