localStorage.setItem('name', 'Bensu');  //set etme- data kaydetme
localStorage.setItem('age', 25);

let ad = localStorage.getItem('name');  // data çekme
let yas = localStorage.getItem('age');

console.log(ad, yas);


//localStorage.removeItem('name'); // data silme

localStorage.clear(); // set ettiğim tüm değerleri sıfırlar

ad = localStorage.getItem('name');
yas = localStorage.getItem('age');

console.log(ad, yas);