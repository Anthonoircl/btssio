/*let a = 5 ; let b = 10
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
var mainButton= document.getElementById('mainButton');
 mainButton.addEventListener('click', () => {
   console.log('Boutton cliqué!')
 })
var body = document.getElementsByTagName('body')[0]
var div = document.createElement("div");
body.appendChild(div);
div.innerHTML = "Bonjour tout le monde";

// Form validation
let form = document
	.getElementById('LoginForm')
	.addEventListener('submit', function (e) {
		e.stopPropagation();
		let error1 = document.getElementById('errorEmail');
        let error2 = document.getElementById('errorPassword');
        let error3 = document.getElementById('errorEmail1');

		// Récupérer les valeurs du formulaire
		let form = document.forms['LoginForm'];
		let email = form['email'];
        
       
		// Si l'email est incorrect, on affiche un
		// message d'erreur et on empeche son envoi.
		if (email.value.trim() === '') {
			error1.textContent = 'Veuillez rentrer une adresse mail.';
			error1.style.display = 'block';
			e.preventDefault();
		} else if (!email.value.match(/@/)) 
        {
        error3.textContent = 'Veuillez ajouter un arobase.';
        error3.style.display = 'block';
        e.preventDefault();
        } 
        else {
            // On masque le message d'erreur, s'il n'y a pas d'erreur.
            error1.style.display = 'none';
            error3.style.display = 'none';
        }
    });

        // Si le Password est incorrect, on affiche un
		// message d'erreur et on empeche son envoi.
		if (password.value.trim() === '') 
        {
			error2.textContent = 'Veuillez rentrer un Password.';
			error2.style.display = 'block';
			e.preventDefault();
		} else 
        {
			// On masque le message d'erreur, s'il n'y a pas d'erreur.
			error2.style.display = 'none';
		};

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
       let output = '';
   
       if (i % 3 === 0) {
         output += 'fizz';
       }
   
       if (i % 5 === 0) {
         output += 'buzz';
       }
   
       console.log(output || i);
    }
   }
   
   fizzBuzz(100);

   */
   function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  alert(factorial(5));

    
 


