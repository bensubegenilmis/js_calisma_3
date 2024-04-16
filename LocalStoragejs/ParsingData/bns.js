const variable = [
    {"hobby": "swimming" , "person": "Bensu"},
    {"hobby": "playing card" , "person": "Bensu"},
    {"hobby": "swimming" , "person": "Bensu"}
]

console.log(JSON.stringify(variable));

localStorage.setItem('todos', JSON.stringify(variable));  // json stringe çevirir -- arrayi stringe çevirir

const storedData = localStorage.getItem('todos');

console.log(JSON.parse(storedData));  //stringi array hale dönüştürür