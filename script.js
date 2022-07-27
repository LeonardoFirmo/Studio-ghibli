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


img.addEventListener('mousemove',()=>{

    main.style.background = 'black'

    img.addEventListener('mouseout',()=>{
        main.style.background='' 
    })


})




