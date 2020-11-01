document.addEventListener("DOMContentLoaded", function(){
    var x1=true;
    var x2 = document.getElementsByClassName('menu');
    // console.log(x2);
    window.addEventListener("scroll", function(){
        //  console.log(window.pageYOffset);
        if(window.pageYOffset>200){
            x2[0].classList.add('dungyen');
        }
        else{
            x2[0].classList.remove('dungyen');
        }
    })

}, false)