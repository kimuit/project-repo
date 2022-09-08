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

function buildFruitBox(fruit) {  
  let box_container = document.querySelector('.box-container');
  let box = document.createElement('div')
  box.setAttribute('class','box')
  let fruitName = document.createElement('h3')
  fruitName.innerHTML = fruit.name 
  let scientificName = document.createElement('h3')
  scientificName.innerHTML = fruit.family + " " + fruit.genus

  let chartDiv = document.createElement('div')
  chartDiv.setAttribute('id',`${fruit.name}`)
  let dataTable  = getDataTable(fruit) 

  box.appendChild(fruitName)
  box.appendChild(scientificName)
  box.appendChild(chartDiv)
  box_container.appendChild(box)

  console.log(" on load callback")
  
  google.charts.setOnLoadCallback(function(){
    let wrapper = new google.visualization.ChartWrapper({
      chartType: 'PieChart',
      dataTable: dataTable, 
      containerId: `${fruit.name}`,
      options: {
        legend: { position: 'top', alignment: 'start' },
        width: 350,
        height: 350,
        pieHole: 0.4,
        is3D:true,
        colors: ['#AAAEEF', '#E8AAEF', '#F0FF33', '#B647DD', '#47DD4B','#47DD84', '#07DDA5', ],
        title: `${fruit.name}`
    }
    })

    wrapper.draw()
  }) 
}
