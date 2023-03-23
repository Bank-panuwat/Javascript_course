// const a = document.querySelector('a');
const a = document.querySelector('a');""
console.log(a[0]);
a.setAttribute('herf','https://www.google.co.th');
a.setAttribute('target','_blank');


const result = {first_Name:"Bank",last_Name:"Panuwat"};
const fullName= `${result.first_Name}${result.last_Name}`;
const p = document.querySelector('p');
p.innerHTML = fullName;


