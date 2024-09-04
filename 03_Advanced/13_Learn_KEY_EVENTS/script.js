const myBox = document.getElementById('myBox');
let x = 0;
let y = 0;
const moveAmount = 20;


document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            y -= moveAmount;
            break;
        case 'ArrowDown':
            y += moveAmount;
            break;
        case 'ArrowLeft':
            x -= moveAmount;
            break;
        case 'ArrowRight':
            x += moveAmount;
            break;
        default:
            return; 
    }
    

    myBox.style.transform = `translate(${x}px, ${y}px)`;
    
   
    myBox.style.backgroundColor = 'green';


    event.preventDefault();
});


document.addEventListener('keyup', () => {
    myBox.style.backgroundColor = 'lightblue';
});
