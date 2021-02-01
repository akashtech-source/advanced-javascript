const student = [
    {level: 2, name: 'kuddus'},
    {level: 5, name: 'challu mijan'},
    {level: 7, name: 'dholu'},
    {level: 1, name: 'kufa kader'},
    {level: 4, name: 'kala kamal'}
];
const names = student.map( hablu => hablu.level);
const ids = student.filter( hablu => hablu.level>4)
console.log(ids);