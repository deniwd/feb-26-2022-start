// chef.js

class Cookie {
    constructor(name, price, ingredients, type) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.type = type;
    }
}

const kue1 = new Cookie("kue1", 5000, ["tepung", "gula"], "basah");
console.log(kue1);

class Chocolate extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type);
        this.isSweet = isSweet;
    }
}

class Sweet extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type);
        this.isSweet = isSweet;
    }
}

class Strawberry extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type);
        this.isSweet = isSweet;
    }
}

const coklat = new Chocolate("coklat", 6000, ["tepung", "coklat"], "kering", false);
console.log(coklat);

const manis = new Sweet("manis", 7000, ["tepung", "gula"], "kering", true);
console.log(manis);

const merah = new Strawberry("strawberry", 8000, ["strawberry", "gula"], "basah", false);
console.log(merah);


class Kitchen {
    constructor(containers) {
        this.containers = containers || [];
    }
    bake(cookie) {
        this.containers.push(cookie);
    }
    showCookies() {
        console.log("Cookies List:");
        this.containers.forEach((container,i) => {
            console.log(`${i+1}. ${container.name}, price: ${container.price}, type: ${container.type}`);
        })
    }
}
            
    





// const civic = new Sedan("Civic", 1500, "N20")


// class Showroom {
//     constructor(rooms) {
//         this.rooms = rooms || [];
//     }
//     addVehicle(vehicle) {
//         this.rooms.push(vehicle);
//     }
//     showVehicles() {
//         console.log("Vehicle List:")
//         for (let i = 0; i < this.rooms.length; i++) {
//             console.log(`${i + 1}. ${this.rooms[i].name}, type: ${this.rooms[i].type}, cc: ${this.rooms[i].cc}`)
//         }
//         // this.rooms.forEach((room,i) => {
//         //     console.log(`${i+1}. ${room.name}, type: ${room.type}, cc: ${room.cc}`)
//         // })
//     }
//     removeVehicle(vehicleName){
//         // ES5
//         // let tempArray = []
//         // for(let i = 0; i < this.rooms.length; i++){
//         //     if(this.rooms[i].name !== vehicleName){
//         //         tempArray.push(this.rooms[i])
//         //     }
//         // }
//         // this.rooms = tempArray;

//         // ES6
//         this.rooms = this.rooms.filter(room => room.name !== vehicleName)
//         // feedback
//         console.log(`Vehicle name: ${vehicleName} has been removed`)
//     }
//     editVehicle(vehicleName, newCC){
//         // ES5
//         // let tempArray = []
//         // for(let i = 0; i < this.rooms.length; i++){
//         //     if(this.rooms[i].name === vehicleName){
//         //         this.rooms[i].cc = newCC
//         //     }
//         //     tempArray.push(this.rooms[i])
//         // }
//         // this.rooms = tempArray
        
        
//         // ES 6
//         this.rooms = this.rooms.map(room => {
//             if(room.name === vehicleName){
//                 room.cc = newCC
//             }
//             return room
//         })
//         // feedback
//         console.log(`Vehicle name: ${vehicleName} has been updated`)
//     }
// }








// class Vehicle {
//     // constructor => function yang di jalankan pertama kali, untuk pembuatan keys
//     constructor(name, type, cc, engine, tags) {
//         this.name = name;
//         this.type = type;
//         this.cc = cc;
//         this.engine = engine;
//         this.tags = tags;
//     }
// }



// -- Children Class
// class Sedan extends Vehicle {
//     constructor(name, cc, nitro) {
//         super(name, "sedan", cc);
//         this.nitro = nitro
//     }
// }
// class Pickup extends Vehicle {
//     constructor(name, cc, box) {
//         super(name, "pickup", cc);
//         this.box = box
//     }
// }
// class SUV extends Vehicle {
//     constructor(name, cc, wheel) {
//         super(name, "suv", cc);
//         this.wheel = wheel
//     }
// }
// const civic = new Sedan("Civic", 1500, "N20")
// const colt = new Pickup("Colt", 2500, 3)
// const tiguan = new SUV("Tiguan", 5000, "4WD")
