const sommenu = new Audio('./img/Alpha.mp3');
document.addEventListener('DOMContentLoaded', () => {
sommenu.play();
});
sommenu.addEventListener('ended', () => {
    sommenu.currentTime = 0;
    sommenu.play();     
});




document.getElementById('alterarcor').addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = '#333232f7';
    } else {
        document.body.style.backgroundColor = 'black';
    }
});


// const hoversom = new Audio('./sons/hoverbutton.mp3');
// hoversom.preload = 'auto';

// const divElement = document.querySelector('body');
// const childElements = divElement.querySelectorAll('*');

// childElements.forEach(element => {
//     element.addEventListener('mouseenter', () => {
        
//         if (hoversom.paused) {
//             hoversom.play();
//         } else {
//             hoversom.currentTime = 0;
//         }
//     });
// });
