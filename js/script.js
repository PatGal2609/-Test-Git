"use strict"

// const result = confirm('Vous etes la???');
// console.log(result);

// const answer = prompt('Vous avez 18ans???', '18')
// console.log(typeof(answer));
// const answers = [];
// answers[0] = prompt('Quel est votre nom?', '')
// answers[0] = prompt('Quel est votre prenom?', '')
// answers[0] = prompt('Quel est votre age?', '')
// console.log(typeof(answers));
// console.log('PatGal');
// console.log(`2 + 2 = ${2+5}`);

// const ourPlanetName = '';
// const userTime = '';
// const storyCount = '';
// const payCashOrNot = '';
// console.log('Hello world');
//const userName = 'PatGal';
//console.log(`Welcome ${userName}`);
// const test = true;
// console.log(typeof test, test);
// console.log(typeof String(test), test);
// const teste = 45;
// console.log(typeof teste, teste);
// console.log(typeof String(teste), teste);
// const test = null;
// console.log(typeof test, test);
// console.log(typeof Number(test), Number(test));
// const test = '123e3';
// console.log(typeof test, test);
// console.log(typeof Number(test), Number(test));
// const test = '';
// console.log(typeof test, test);
// console.log(typeof Boolean(test), Boolean(test));
// const var1 = 2;
// const  var2 = '3';
// console.log(var1 < var2);
// const a = 'ананас';
// const b ='яблоко';
// console.log(a.charCodeAt(), b.charCodeAt());

// const jsName = prompt('Quel est lappelation officel de JavaScript?', '');

// if (jsName =='ECMAScript') {
//     alert('Bonne reponse');
// } 
// else {
//     alert('Tu ne connais pas ECMAScript?');
// }

// let anyNumber = prompt('Entre un chiffre', '')

// if (anyNumber > 0) {
//     alert(1);
// }
// else if (anyNumber < 0) {
//     alert(-1);
// }
// else {
//     alert(0)
// }

// let result;
// result = (a + b < 4) ? 'Petit' : 'Beaucoup';

// let message;
// let login = prompt('Quel est votre status dans la boite?', '');

// message = (login == 'Member') ? alert('Salut') : (login == 'Directeur') ? alert('Bonjour') : 
// (login == '') ? alert('Login manquant') : alert('');
// let userAge = prompt('Quel est votre age', '');
// if (14<= userAge && userAge <= 90) {
//     alert('Bienvenue')
// }

// if (userAge < 14 || userAge > 90) {
//     alert('Visiteur ne ordinaire')
// }
// == ->
// if (!(14<= userAge && userAge <= 90)) {
//     alert('Bienvenue')
// }

// let userLogin = prompt('Login ', '');
// let userParole = prompt('Mot de passe ', '');

// if (userLogin == 'Admin') {
//     userParole;
//     if (userParole == 'iam the boss') {
//         alert('Bienvenue Boss! ')
//     }
//     else if (!(userParole == 'iam tehe boss')) {
//         alert('Wrong password')
//     }
// }
// else if ((userLogin = !'Admin')) {
//     alert('Je ne vous connais pas')
// }

let userLogin = prompt('Prsentez-vous: ', '');

if (userLogin === 'Admin') {
    let userPassw = prompt('Votre mot de passe: ', '');
    if (userPassw === 'iam the boss') {
        alert('Bienvenue Boss');
    }
    else if (userPassw === '' || userPassw === null) {
        alert('Annulle')
    }
    else {
        alert('Mot de passe incorect')
    }
}
else if (userLogin === '' || userLogin === null) {
    alert('Annulle')
}
else {
    alert('Je ne vous connais pas')
}

