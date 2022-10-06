let bt1 = document.querySelector('#bt1')
let bt2 = document.querySelector('#bt2')
let img = document.querySelector('.imageschihi')
let main =  document.querySelector('main')
console.log(main)

bt1.addEventListener('mousemove',()=>{
    bt1.style.background='#628E75' 

    bt1.addEventListener('mouseout',()=>{
        bt1.style.background='' 
    })
})




bt2.addEventListener('mousemove',()=>{
    bt2.style.background='#628E75' 

    bt2.addEventListener('mouseout',()=>{
        bt2.style.background='' 
    })
})

let cor1 = 628575
let cor2 = 134855


img.addEventListener('mousemove',()=>{
    main.style.background ='linear-gradient(130.02deg, #628575 0.66%, #134855 83.32%)'
 


    
   let escurece= setInterval(() => {
        if(cor1 > 600000){
            cor1=134855
        }

        cor1--
        cor2--
        console.log('cor sendo alterada');
        main.style.background =`linear-gradient(130.02deg, #${cor1} 0.66%, #${cor2} 83.32%)`
        console.log(cor1,cor2);
        if(cor1 < 99000 || cor2 < 99000){
            clearInterval(escurece)
        }
       
    }, 10);
    
   

    img.addEventListener('mouseout',()=>{
        main.style.background='' 
        cor1 = 628575
        cor2 = 134855
        clearInterval(escurece)
    })


})



