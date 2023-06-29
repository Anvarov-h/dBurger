// Class

// class Human {
//     constructor(obj){
//         this.name = obj.ism
//         this.gendor = obj.jinsi
//     }
// }
// const human = new Human({
//     ism:'Ism',
//     jinsi: 'jinsi'
// })

// class Man extends Human{
//     constructor(obj){
//         super(obj)
//         this.age = obj.yoshi
//     }
// }
// const man = new Man({
//     ism: 'Sanjar',
//     jinsi:'Erkak',
//     yoshi:27
// })
// console.log(man);


class Car{
    constructor(obj){
        this.name = obj.ismi,
        this.year = obj.yil,
        this.color = obj.rang
    }
    malumot(){
        return `Moshinani nomi: ${this.name}.\nMoshinani yoshi: ${2022 - this.year}.\nRangi: ${this.color}`
    }
}

const car = new Car({
    ismi:'Malibu',
    yil:2021,
    rang:'Qora'
})

const car2 = new Car({
    ismi:'Nexia',
    yil:2019,
    rang:'Oq'
})
const car3 = new Car({
    ismi:'Matiz',
    yil:2015,
    rang:'Qizil'
})

console.log(car2);
console.log(car);
console.log(car3);



class Boat extends Car{
    constructor(obj){
        super(obj)
        this.speed = obj.tezligi
    }
    info(){
       return this.malumot() + `\nTezligi:${this.speed} uzel.`
    }
}
const boat = new Boat({
    ismi:'Titanic',
    yil:1912,
    rang:'Qora va Qizil',
    tezligi: '40kmh'
})
console.log(boat);