gsap.from(".block", { duration: 2.5, ease: "bounce.out", y: -500 });
gsap.from("h3", { duration: 2, delay: 2.5, opacity:0, ease: "expo.out", y: 500 });
gsap.from("#inputField", { duration: 2, delay: 2.8, opacity:0, ease: "expo.out", y: 500 });
gsap.from("#btn", { duration: 2, delay: 3, opacity:0, ease: "expo.out", y: 500 });
gsap.from("#attempts", { duration: 2, delay: 3.7, opacity:0, ease: "bounce.out", y: 50 });
          
const btn= document.querySelector("#btn");
const attempts = document.querySelector("#attempts");
const inputField=document.querySelector("#inputField");
const answer= Math.floor(Math.random()*13)+1;

let numberOfAttempts =0;



btn.addEventListener("click", play);

function play(){
    const userNumber=document.querySelector("#inputField").value;
    
    if (userNumber < 1 || userNumber > 13){
        Swal.fire({
            icon: 'error',
            text: 'Inserta un número entre 1 y 13.',
            confirmButtonColor: '#66BFBF'
            
    })
}
    else if (isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            text: 'Solo acepto números',
            confirmButtonColor: '#66BFBF'
        })
    }

    else if(userNumber >answer){
    numberOfAttempts+=1;
        Swal.fire({
            text: 'No, es más pequeño!',
            confirmButtonColor: '#66BFBF'
                 })
      attempts.textContent="Tus intentos: " + numberOfAttempts;
    }
        
    
    else if(userNumber < answer){
      numberOfAttempts+=1;
        Swal.fire({
            text: 'No, es más grande!',
            confirmButtonColor: '#66BFBF'
          
        })
      attempts.textContent="Tus intentos: " + numberOfAttempts;
        }

    else {
      inputField.value = '';
      numberOfAttempts+=1
        Swal.fire({
            text: 'Siiiiiii! ¡Has ganado!',
            imageUrl: 'https://images.unsplash.com/photo-1631397832307-d8344ff719f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            imageWidth: 300,
            imageHeight: 400,
            imageAlt: 'Victoria',
            confirmButtonColor: '#66BFBF'
          })
  
      attempts.textContent="Necesitaste " + numberOfAttempts + " intentos." ;
      
      btn.style.display='none';
          const restart=document.querySelector('.restart');
          restart.style.display='block';
          restart.addEventListener('click', reload);
          function reload(){
            location.reload();
          }
 
          }
        
    }


inputField.addEventListener("keypress", function(e){
        if(e.keyCode===13){
            play();
        }
})