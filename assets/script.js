document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

document.addEventListener('DOMContentLoaded', function(){
  google.charts.load('current', {'packages':['corechart']});
  createNutritionSection()
})

function createNutritionSection(){
  let data = fetchData()
  console.log("some data")
  console.log(data)
  data.then((data) =>{
    console.log("some data")
    console.log(data);
    let res = data.result
    for(let i=0; i<data.length; i++){
      if(i==9){
        break
      }
      buildFruitBox(data[i])   
     }
     })  
}

