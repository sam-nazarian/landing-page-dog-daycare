const map = L.map('map', {scrollWheelZoom: false,}).setView([49.883226, -97.155884], 13);

// https://api.mapbox.com/styles/v1/saman2111/cl79xjeka001714n0hqhmd9mg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FtYW4yMTExIiwiYSI6ImNsMHR2bXo2ZjBmM2ozZG11aDVhejF1MncifQ.3KrUHjHh3FoNFafvfPba_w
L.tileLayer('https://api.mapbox.com/styles/v1/saman2111/cl79xjeka001714n0hqhmd9mg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FtYW4yMTExIiwiYSI6ImNsMHR2bXo2ZjBmM2ozZG11aDVhejF1MncifQ.3KrUHjHh3FoNFafvfPba_w', {
  // maxZoom: 12,
  // attribution: '© OpenStreetMap',
}).addTo(map);

const marker2 = L.marker([49.865083, -97.198370]).addTo(map).bindPopup("<h4>Saman's Dog Daycare:</h4><p>Lanark Gardens, Winnipeg, MB R3N 1L3</p>").openPopup();;
const marker = L.marker([49.883226, -97.155884]).addTo(map).bindPopup("<h4>Saman's Dog Daycare:</h4><p>120 Young St, Winnipeg, MB R3C 1Y6</p>").openPopup();;



// /////////////////////////////////////////////////////////
// // Set current year
const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();


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

// select anchor elm, with href property
const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);

allLinks.forEach((link)=>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute('href');
    
    // Scroll back to top
    if(href === '#') window.scrollTo({top: 0, behavior: 'smooth'});
    
    // Scroll to other links
    if(href !== '#' && href.startsWith('#') ){
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({behavior: 'smooth'});

      // Close mobile navigation
      headerEl.classList.remove('nav-open');
    }

    // Another way to Close mobile navigation
    //only way it contians that class is if menu is open
    // if(link.classList.contains('main-nav-link')) headerEl.classList.remove('nav-open');
  })
})


// /////////////////////////////////////////////////////////
// // Sticky navigation

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


// ///////////////////////////////////////////////////////////
// // Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

// // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

// /*
// .no-flexbox-gap .main-nav-list li:not(:last-child) {
//   margin-right: 4.8rem;
// }

// .no-flexbox-gap .list-item:not(:last-child) {
//   margin-bottom: 1.6rem;
// }

// .no-flexbox-gap .list-icon:not(:last-child) {
//   margin-right: 1.6rem;
// }

// .no-flexbox-gap .delivered-faces {
//   margin-right: 1.6rem;
// }

// .no-flexbox-gap .meal-attribute:not(:last-child) {
//   margin-bottom: 2rem;
// }

// .no-flexbox-gap .meal-icon {
//   margin-right: 1.6rem;
// }

// .no-flexbox-gap .footer-row div:not(:last-child) {
//   margin-right: 6.4rem;
// }

// .no-flexbox-gap .social-links li:not(:last-child) {
//   margin-right: 2.4rem;
// }

// .no-flexbox-gap .footer-nav li:not(:last-child) {
//   margin-bottom: 2.4rem;
// }

// @media (max-width: 75em) {
//   .no-flexbox-gap .main-nav-list li:not(:last-child) {
//     margin-right: 3.2rem;
//   }
// }

// @media (max-width: 59em) {
//   .no-flexbox-gap .main-nav-list li:not(:last-child) {
//     margin-right: 0;
//     margin-bottom: 4.8rem;
//   }
// }
// */
