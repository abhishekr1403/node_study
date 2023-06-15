var person={name:"Abhishek", age:21, place:"kottayam", display:function(){
    console.log("My name is  "+this.name)
}}

//console.log(person)
//console.log(person.name)
//console.log(person["age"])

person.name="ambu"

//for (x in person){
    //console.log(person[x])
//}

person.dob="14-03-2002"


person.displayage= function(){
    console.log(this.dob)
}

console.log(person.display())

console.log(person.displayage())