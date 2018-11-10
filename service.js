const Promise = require('./promise');
const Observable = require('./observable');
class CarService{
    constructor(){
        this.features=[];
    }
    setFeatures(feature){
        this.features.push(feature);
    }
    asyncFunction(cb){
        //let secretStr ='';
        // return new Promise((resolve, reject)=>{
        //     setTimeout(function(){
        //         secretStr ="SecretString";
        //         resolve(secretStr);
        //     },2000);
        // })
        return new Observable(observer=>{
            setTimeout(()=>{
                return observer.next('SecretObserver');
            },2000)
            
        })
    }
}
module.exports = CarService;