console.log("I am in external css file")


function hack_the_person(){

    document.getElementById('box').innerHTML='You are Hacked Now for 3 seconds!';
    
    setTimeout(() => {
        document.getElementById('box').innerHTML='You are Released  ! Run away';
        
    }, 3000);


}


// Events :-  Events are the actions which triggers the function
// Functions:- Function are like machines which takes input and produces output by doing doing some computation 


// Functions have 2 components

// 1. Function Defination (What needs to be done when someone calls the function)
// 2. Function Call (When we need to run the call.)


// Create a function which takes input as 2 numbers and returns the sum of those 2 numbers.

// Syntax (How we can write a particular line of code)


// function defination
function Bob_add_my_numbers(num_1 , num_2){

var result = num_1 + num_2 ;

return result 

}

//Function Call

var num_1=2;
var num_2 = 1;

var output_of_addition = Bob_add_my_numbers(num_1,num_2) // function call

console.log(output_of_addition);


document.getElementById('id').value;
document.getElementById('show-data').innerHTML=""







