let sayName = function (name){
    console.log(`Selamun Aleyküm.Benim adım${name}`);
}

let sayAge = function (age){
    console.log(`${age} yaşındayım.`);
}
module.exports = {
    sayName: sayName,
    sayAge: sayAge
}