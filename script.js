'use strict';
/*
console.log(document.querySelector('.teade').textContent); //dom manipulation.
document.querySelector('.teade').textContent = 'Alusta arvamist!';
document.querySelector('.number').textContent = 69;
document.querySelector('.skoor').textContent = 10;

document.querySelector('.arva').value = 23;
*/
let number = Math.trunc(Math.random() * 20) + 1;

let skoor = 15;
let parimtulemus = 0;
const naitaTeadet = function (message) {
  document.querySelector('.teade').textContent = message;
};
document.querySelector('.kontrolli').addEventListener('click', function () {
  const arva = Number(document.querySelector('.arva').value);
  console.log(arva, typeof arva);

  // Kui ei ole inputi

  if (!arva) {
    naitaTeadet('Number on puudu🛑');
    // document.querySelector('.teade').textContent = 'Number on puudu🛑';
  } else if (arva > 20 || arva < 1) {
    // document.querySelector('.teade').textContent =
    naitaTeadet('Arv peab olema 1 ja 20 vahel');

    // if (arva > 20 || arva < 1) {
    //   document.querySelector('.teade').textContent =
    //     'Arv peab olema 1 ja 20 vahel';
    // }
  } else if (arva === number) {
    // document.querySelector('.teade').textContent =
    naitaTeadet('Õige vastus! 🌸');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#e74725';
    document.querySelector('.number').style.width = '30 rem';

    if (skoor > parimtulemus) {
      parimtulemus = skoor;
      document.querySelector('.parimtulemus').textContent = parimtulemus;
    }
  } else if (arva !== number) {
    if (skoor > 1) {
      //   document.querySelector('.teade').textContent =
      naitaTeadet(
        arva > number ? 'Vastus on liiga kõrge!' : 'Vastus on liiga madal'
      );

      skoor--;
      document.querySelector('.skoor').textContent = skoor;
      //   Kui elud on otsa saanud!
    } else {
      //   document.querySelector('.teade').textContent =
      naitaTeadet('Sa kaotasid! 😭');
      document.querySelector('.skoor').textContent = 0;
    }
  }

  // Kui pakkumine on liiga kõrge
  //     else if (arva > number) {
  //     if (skoor > 1) {
  //       document.querySelector('.teade').textContent = 'Vastus on liiga kõrge!⚡';
  //       skoor--;
  //       document.querySelector('.skoor').textContent = skoor;
  //       //   Kui elud on otsa saanud!
  //     } else {
  //       document.querySelector('.teade').textContent = 'Sa kaotasid! 😭';
  //       document.querySelector('.skoor').textContent = 0;
  //     }
  //     // Kui pakkumine on liiga madal
  //   } else if (arva < number ) {
  //     if (skoor > 1) {
  //       document.querySelector('.teade').textContent =
  //         'Vastus on liiga madal! 🍓';
  //       skoor--;
  //       document.querySelector('.skoor').textContent = skoor;
  //       //   Kui elud on otsa saanud
  //     } else {
  //       document.querySelector('.teade').textContent = 'Sa kaotasid! 😭';
  //       document.querySelector('.skoor').textContent = 0;
  //     }
  //   }
});

document.querySelector('.uuesti').addEventListener('click', function () {
  skoor = 15;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.teade').textContent = 'Alusta ära arvamist...';
  document.querySelector('.skoor').textContent = skoor;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.arva').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('number').style.width = '15 rem';
});
