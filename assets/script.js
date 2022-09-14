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

document.getElementById("Btnone").addEventListener("click", displayDate);
function displayDate() {
  document.getElementById("date").innerHTML = Date();
}
// like section
const clickListener = () => {
    let liked = document.querySelector('#like-button')
    liked.addEventListener('click', () => {
        addLikes();
    })
}

const addLikes = () => {
    let likeCount = document.querySelector('#like-count')
    likeCount.innerHTML = `${parseInt(likeCount.innerText) + 2} likes`
}

// function buildBookShelf(book) {  
//   let box_container = document.querySelector('.box-container');
//   let box = document.createElement('div')
//   box.setAttribute('class','box')
//   let bookName = document.createElement('h3')
//   bookName.innerHTML = book.name 
//   let libraryName = document.createElement('h3')
//   libraryName.innerHTML = book.family + " " + book.genus

//   let chartDiv = document.createElement('div')
//   chartDiv.setAttribute('id',`${book.name}`)
//   let dataTable  = getDataTable(book) 

//   box.appendChild(bookName)
//   box.appendChild(libraryName)
//   box.appendChild(chartDiv)
//   box_container.appendChild(box)

//   console.log(" on load callback")
  
//   google.charts.setOnLoadCallback(function(){
//     let wrapper = new google.visualization.ChartWrapper({
//       chartType: 'PieChart',
//       dataTable: dataTable, 
//       containerId: `${book.name}`,
//       options: {
//         legend: { position: 'top', alignment: 'start' },
//         width: 350,
//         height: 350,
//         pieHole: 0.4,
//         is3D:true,
//         colors: ['#AAAEEF', '#E8AAEF', '#F0FF33', '#B647DD', '#47DD4B','#47DD84', '#07DDA5', ],
//         title: `${book.name}`
//     }
//     })

//     wrapper.draw()
//   }) 
// }

const api_url = 'http://openlibrary.org/search.json?author=tolkien'
async function getArticle(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.docs[0].title);
    //  const {title, publish_date} = data;
 function first() {
     data.docs.forEach((e) => {
    console.log(`${e.title}`);
});
 }
function second() {
     data.docs.forEach((e) => {
    console.log(`${e.publish_date[0]}`);
      })
}

//   document.getElementById('lon').textContent = data.docs[1];
// first();
// second();
document.getElementById("Btnone").addEventListener("click", displayItems);
function displayItems() {
  document.getElementById("Name").innerHTML = first();
}

document.getElementById("Btnone").addEventListener("click", displayDates);
function displayDates() {
  document.getElementById("published").innerHTML = second();
}
}
getArticle();


console.log('about to fecth data');
 fetch('http://openlibrary.org/search.json?author=tolkien')
.then(res =>{
    if(res.ok){
        console.log('successful')
    }else{console.log('not successful')
}
})
.then(data => console.log(data))
.catch(error => console.log('Error'))

// function readvalue() {
//   var titleBook = parseInt(document.getElementById("bSearch").value);
//     document.getElementById("bSearch").innerHTML = titleBook;
//     alert("looking for ${titleBook}?")
// }

// document.addEventListener('DOMContentLoaded', function(){
//   google.charts.load('current', {'packages':['corechart']});
//   createArticleSection()
// })

// function createArticleSection(){
//   let data = fetchData()
//   console.log("some data")
//   console.log(data)
//   data.then((data) =>{
//     console.log("some data")

// }
// async function fetchData(){

//   return await fetch("http://localhost:5050/result",{
 
//   })
//   .then((res)=>res.json()

//   )
//   .then((res)=>res)
// }