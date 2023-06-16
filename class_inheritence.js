class sample{
    displaybase(){
        console.log("This is the base class method")
    }
}


class sample2 extends sample{
    displaychild(){
        console.log("This is child class")
    }
}

var a = new sample2()
a.displaybase()
a.displaychild()