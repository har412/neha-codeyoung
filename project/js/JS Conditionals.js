


//  if students marks are greater than 90 then we consider that student for scholarship. 

// else that student is not going to get scholarship

// var student1_marks = 90;  // variable  (container which contains the different data)
// Conditional Statements

// 1. IF-ELSE STATEMENT






function check() {
    var student_marks=document.getElementById('marks').value;
    if(student_marks>=90){
        console.log("You are selected for scholarship");
        document.getElementById('show-result').innerHTML="You are selected for scholarship";
        
        }
        else{
        console.log("You have been Rejected.")
        document.getElementById('show-result').innerHTML="You have been Rejected.";

        }
}