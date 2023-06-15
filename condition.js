var r=require("readline-sync")

var a= r.question("Enter 2 numbers: ")
var b = r.question("")

if (b<a)
{
    console.log("larger is "+a)
}
else if(a===b)
{
    console.log("same")
}
else if(b>a)
{
    console.log("larger is "+b)
}
