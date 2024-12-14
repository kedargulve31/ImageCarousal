var img =  document.querySelectorAll('.photo img')
var count = 0 ;
var btnNext  = document.querySelector('#btnNext')
var btnPrev  = document.querySelector('#btnPrev')



img.forEach((image)=>{
      image.style.left =`${count*100}%`
 count++
})

var counter = 0 ;

btnNext.addEventListener('click',()=>{
      counter++
      if(counter>4){
            counter=0;
      }
      img.forEach((image)=>{
            image.style.transform = `translateX(-${counter*100}%)`
      })

})

btnPrev.addEventListener('click',()=>{
      counter--
      if(counter>4){
            counter=0
      }
      images.style.transform =`translateX(-${counter*100})`
})

setInterval(() => {
      counter++
      if(counter>4){
            counter=0;
      }
      img.forEach((image)=>{
            image.style.transform = `translateX(-${counter*100}%)`
      })
}, 4000);


