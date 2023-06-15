var num=10
console.log("Actual value: "+num)

function sample1(){
      var num=20
     console.log(console.log("Value inside sample1: "+num))
     function sample2(){
         var num=30
         console.log("Value inside sample2: "+num)
     }
     sample2()
}

sample1()
console.log("Final value : "+num)