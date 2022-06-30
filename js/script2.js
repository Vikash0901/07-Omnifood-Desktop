console.log("hello world");
const myName = 'Vikash Dagar';
let h1 = document.querySelector('.heading-primary');
console.log(h1.textContent);


// h1.addEventListener('click' , function() {
//     h1.textContent=myName;
//     h1.style.backgroundColor='Red';
//     h1.style.padding='5rem';
// })

/// Set Currentyear
const currentYear = new Date().getFullYear();
console.log(currentYear);
const yearEl = document.querySelector('.year');
yearEl.textContent = currentYear

//// Make mobile navigation
const headerEl = document.querySelector('.header');
const btnNavEl = document.querySelector('.btn-mobile-nav');

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
});

////////////////////////////////////
///Smooth scroling animation 

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); //stope scrollng 
        const href = link.getAttribute('href')

        /// Scroll back too tap
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }
        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});

///////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs= new IntersectionObserver(
    function(entries) {
        const ent=entries[0];
        console.log(ent);

        if (ent.isIntersecting === false){
            document.body.classList.add('sticky');
        }
        if (ent.isIntersecting === true){
            document.body.classList.remove('sticky');
        }
    } , 
{
    //In the viewport
    root:null,
    threshold:0,
    rootMargin:"-80px",
})
obs.observe(sectionHeroEl);

//////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

  // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
