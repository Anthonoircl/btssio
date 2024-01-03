let a = 5 ; let b = 10
let somme = a+b
console.log (somme)

for(var index=0 ; index<=5;index++)
console.log(index)


function carre(n){
    return n*n
}
console.log(carre(5))

let object = {
    name: 'personne',
    age: 18 ,
    bonjour: function(présentation){
        console.log("Bonjour je suis",object.name,"j'ai pour age",object.age)
       
    },
    anniversair:function(){
        console.log(object.age+1)
    }
}
object['bonjour']()
object['anniversair']()

var tableau=[1,2,3,4,5]
tableau.forEach(function(number){
    console.log(number)
})
let newTable = tableau.map(function(number){
return number*number
})
console.log(newTable)

function changeStyle(){
    var element = document.getElementById("monDiv");
    element.style.color = "#ff0000";
}
changeStyle()

 mainButton.addEventListener('click', () => {
   alert('Oh, you clicked me!')
 })
var body = document.getElementsByTagName('body')[0]
var div = document.createElement("div");
body.appendChild(div);
div.innerHTML = "Bonjour tout le monde";



