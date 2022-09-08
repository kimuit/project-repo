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
  createArticleSection()
})

function createArticleSection(){
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
      buildBookShelf(data[i])   
     }
     })  
}

function buildBookShelf(book) {  
  let box_container = document.querySelector('.box-container');
  let box = document.createElement('div')
  box.setAttribute('class','box')
  let bookName = document.createElement('h3')
  bookName.innerHTML = book.name 
  let libraryName = document.createElement('h3')
  libraryName.innerHTML = book.family + " " + book.genus

  let chartDiv = document.createElement('div')
  chartDiv.setAttribute('id',`${book.name}`)
  let dataTable  = getDataTable(book) 

  box.appendChild(bookName)
  box.appendChild(libraryName)
  box.appendChild(chartDiv)
  box_container.appendChild(box)

  console.log(" on load callback")
  
  google.charts.setOnLoadCallback(function(){
    let wrapper = new google.visualization.ChartWrapper({
      chartType: 'PieChart',
      dataTable: dataTable, 
      containerId: `${book.name}`,
      options: {
        legend: { position: 'top', alignment: 'start' },
        width: 350,
        height: 350,
        pieHole: 0.4,
        is3D:true,
        colors: ['#AAAEEF', '#E8AAEF', '#F0FF33', '#B647DD', '#47DD4B','#47DD84', '#07DDA5', ],
        title: `${book.name}`
    }
    })

    wrapper.draw()
  }) 
}
