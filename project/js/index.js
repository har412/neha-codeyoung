console.log("I am in external css file")


function hack_the_person(){

    document.getElementById('box').innerHTML='You are Hacked Now for 3 seconds!';
    
    setTimeout(() => {
        document.getElementById('box').innerHTML='You are Released  ! Run away';
        
    }, 3000);


}