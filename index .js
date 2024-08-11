let tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");
const loader = document.getElementById("preloader");
const navlinks = document.querySelectorAll(".nav-link");
const sections = [...document.querySelectorAll(".section")];


// ---------------------preloader-------------------------

window.addEventListener("load", () => {
  loader.style.display = "none";
});

// ---------------------meno bar -------------------------
const fabars=document.querySelector('.fa-bars');
const faxmark=document.querySelector('.fa-xmark');
const menu=document.querySelector('#menu');
console.log(faxmark);
console.log(fabars);

fabars.addEventListener('click',()=>{
  menu.style.right='0'
  fabars.style.display='none';
  
})
faxmark.addEventListener('click',()=>{
  menu.style.right='-600px';
  fabars.style.display='block';
  
})





// ---------------------active menu-------------------------

for (const navlink of navlinks) {
  navlink.addEventListener("click", (e) => {
    for (const navlink of navlinks) {
      navlink.classList.remove("active");
    }
    navlink.classList.add("active");
  });
}

// ---------------------about-------------------------

let removeTab = () => {
  for (const link of tablinks) {
    link.classList.remove("active-link");
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
};
for (const link of tablinks) {
  link.addEventListener("click", (e) => {
    removeTab();
    link.classList.add("active-link");
    document.getElementById(link.innerHTML).classList.add("active-tab");
  });
}

// ---------------------about-------------------------

// let currentsection = "222";

// window.addEventListener("scroll", () => {
//   for (const section of sections) {
   
//     if (window.screenY >= section.offsetTop ) {
//       currentsection = section.id;
//       console.log(currentsection);
//     }
//   }
// });

// for (const navlink of navlinks) {
//   if (navlink.href.includes(currentsection)) {
//     document.querySelector(".active").classList.remove("active");
//     navlink.classList.add("active");
//   }
// }

// // scrollY
// // window.offset

// //     for (const section of sections) {
// //       navlink.classList.remove("active");
// //     }

// //     navlink.classList.add("active");
// //   });
// // }

// let res = window.scrollY;
// console.log(res);
// console.log(document.getElementById("services").offsetTop);
