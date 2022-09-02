const map = L.map('map', {scrollWheelZoom: false, dragging: !L.Browser.mobile }).setView([49.883226, -97.155884], 11);

// https://api.mapbox.com/styles/v1/saman2111/cl79xjeka001714n0hqhmd9mg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FtYW4yMTExIiwiYSI6ImNsMHR2bXo2ZjBmM2ozZG11aDVhejF1MncifQ.3KrUHjHh3FoNFafvfPba_w
L.tileLayer('https://api.mapbox.com/styles/v1/saman2111/cl79xjeka001714n0hqhmd9mg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FtYW4yMTExIiwiYSI6ImNsMHR2bXo2ZjBmM2ozZG11aDVhejF1MncifQ.3KrUHjHh3FoNFafvfPba_w', {
  // maxZoom: 12,
  // attribution: '© OpenStreetMap',
}).addTo(map);

const marker2 = L.marker([49.865083, -97.198370]).addTo(map).bindPopup("<h4>Saman's Dog Care:</h4><p>Lanark Gardens, Winnipeg, MB R3N 1L3</p>").openPopup();;
const marker = L.marker([49.883226, -97.155884]).addTo(map).bindPopup("<h4>Saman's Dog Care:</h4><p>120 Young St, Winnipeg, MB R3C 1Y6</p>").openPopup();;



// /////////////////////////////////////////////////////////
// // Set current year
const yearElAll = document.querySelectorAll('.year');

for(let i=0; i<yearElAll.length; i++){
  yearElAll[i].textContent = new Date().getFullYear();
}


// /////////////////////////////////////////////////////////
// // Set Dates of 'From' & 'End' on service length section
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;
const formTimeFromElm = document.getElementById('form-time-from')
const formTimeEndElm = document.getElementById('form-time-end')
formTimeFromElm.setAttribute('value', today);
formTimeFromElm.setAttribute('min', today);

formTimeEndElm.setAttribute('value', today);
formTimeEndElm.setAttribute('min', today);



/////////////////////////////////////////////////////////
// Make movile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function(){
  headerEl.classList.toggle('nav-open');
})



// /////////////////////////////////////////////////////////
// // Smooth scrolling animations

//using event delegation to limit num of eventListeners
headerEl.addEventListener('click', function(e){
  e.preventDefault();  
  const target = e.target.closest('a');
  if(target === null) return;

  // href of target
  /** @type{string} */
  const href = target.getAttribute('href')

  if(href === '#top') window.scrollTo({top: 0, behavior: 'smooth'});

  //starts with #, longer than 1 word, & is not #top,
  if(href[0] === '#' && href.length > 1 && href !== '#top') {
    const scrollToSectionEl = document.querySelector(href);
    scrollToSectionEl.scrollIntoView({behavior: 'smooth'});
  }

  // Close mobile navigation
  headerEl.classList.remove('nav-open');
})

const footerLogoEl = document.querySelector('.footer-logo');

footerLogoEl.addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
})



// /////////////////////////////////////////////////////////
// // Sticky navigation
// COULD HAVE USED CODE BELOW TO REMOVE THE STICKY NAVIGATION IN HERO SECTION, & ONLY SHOW IT AFTER THAT SECTION

// const sectionHeroEl = document.querySelector('.section-hero')

// const obs = new IntersectionObserver(function(entries){
//   const ent = entries[0];
//   // console.log(ent);

//   if(ent.isIntersecting === false) document.body.classList.add('sticky')

//   if(ent.isIntersecting === true) document.body.classList.remove('sticky')

// }, {
//   // In viewport
//   root: null, 
//   threshold: 0, 
//   //Margin around the root, to make intersection happen sooner
//   rootMargin: '-80px',
// });

// obs.observe(sectionHeroEl);