const btn= document.querySelector("#btn");
const inputField=document.querySelector("#inputField");
const answer= Math.floor(Math.random()*13)+1;

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
        Swal.fire({
            text: 'No, es más pequeño!',
            confirmButtonColor: '#66BFBF'
        })
    }
        
    
    else if(userNumber < answer){
        Swal.fire({
            text: 'No, es más grande!',
            confirmButtonColor: '#66BFBF'
        })
        }

    else {
        Swal.fire({
            text: 'Siiiiiii! ¡Has ganado!',
            imageUrl: 'https://images.unsplash.com/photo-1621581314625-ec70e46c76e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            imageWidth: 300,
            imageHeight: 400,
            imageAlt: 'Victoria',
            confirmButtonColor: '#66BFBF'
          })
          }
        
    }


inputField.addEventListener("keypress", function(e){
        if(e.keyCode===13){
            play();
        }
})