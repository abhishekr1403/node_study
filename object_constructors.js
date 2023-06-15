
function details(name, age, place){
    this.name=name
    this.age=age
    this.place=place
    
    this.display=function(){
        console.log("Name: "+this.name+" Age: "+this.age+" Place: "+this.place)
    }
}

var st1=new details("Abhishek", 21, "Kottayam")
st1.display()

var st2=new details("mubi", 21, "Kodungaloor")
console.log(st2.age)