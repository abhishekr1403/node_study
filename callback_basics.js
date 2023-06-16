//Basics of time control example


/*var dt = new Date()

console.log("Started")

for( i=0; i<100; i++){
console.log("Loop")
}

console.log("Ended")
var diff = new Date()-dt

console.log(diff)*/


//Control working with given time (Synchronous)

/*var Longtask = (time) => {

    var dt = new Date()
    while((new Date()-dt)<=time){

    }
}*/

/*console.log("Started")
Longtask(2000)
console.log("Ended")

console.log("Started")
Longtask(2000)
console.log("Ended")


console.log("Started")
Longtask(2000)
console.log("Ended")*/

//asynchronous

function showEnd() {
    console.log("Ended")
}



console.log("Started")
setTimeout(showEnd, 2000)


console.log("Started")
setTimeout(showEnd, 4000)



console.log("Started")
setTimeout(showEnd, 6000)