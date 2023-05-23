// let myImage = document.querySelector('img');

// myImage.onclick = function changeImage() {
//     let myImage = document.querySelector('img');
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc === 'images/firefox-icon.png') {
//         myImage.setAttribute('src', 'images/IceCreamVanilla.jpg');
//     } else {
//         myImage.setAttribute('src', 'images/firefox-icon.png');
//     }
// }

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
// myButton.onclick = function setUserName(){
//     let myName = prompt('Please enter your name');
//     if (!localStorage.getItem('name')){
//         setUserName();
//     } else{
//         let storedName = localStorage.getItem('name');
//         myHeading.innerHTML = 'Hello ' + storedName;
//     }
// }

// Task 3
function saying(event) {
    let button = event.target;
    let buttonClass = button.getAttribute('class');  
    if (buttonClass === '1') {
        alert("Кожному мила своя сторона");
    } else if (buttonClass === '2') {
        alert("Усвідомлена любов до свого народу не поєднується з ненавистю до інших.");
    } else if (buttonClass === '3') {
        alert("Ті, що виїздять за море, міняють небо, а не душу.");
    } else if (buttonClass === '4') {
        alert("Для нас дорогі батьки, дорогі діти, близькі, родичі; але всі уявлення про любов до чого-небудь поєднані в одному слові «вітчизна».");
    } else if (buttonClass === '5') {
        alert("Мова — це глибина тисячоліть.");
    }
}
