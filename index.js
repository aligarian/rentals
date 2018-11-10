const Car = require('./car');
const CarService = require('./service');

const car1 = new Car("Audi", "S3");
const car2 = new Car("Ford", "Fiesta");
const carService = new CarService('Benz');
// console.log(car1.brand);
// carService.setFeatures(car1);
// console.log(carService.features);

// carService.asyncFunction().then(d=>{
//     console.log(d);
// });
carService.asyncFunction().subscribe({
    next:(next)=>{console.log(next)},
    error:(error)=>{console.log(error)},
    complete:(complete)=>{console.log(complete)}
})