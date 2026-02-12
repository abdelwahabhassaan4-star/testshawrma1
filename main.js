const btn = document.getElementById("alarmBtn");
const dropdown = document.getElementById("alarmDropdown");

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("hidden");
});

document.addEventListener("click", () => {
  dropdown.classList.add("hidden");
});

const slides = document.querySelectorAll(".hero-slide");
const titles = ["مشاوي على الفحم فاخرة", "برجر الشارورما المدخنة", "أفضل وجبات الشاورما"];
const descs = [
  "أجود أنواع شاورما الفراخ الطازجة",
  "برجر يجذب كل حواسيك - طعم غني وقوام مقرمش",
  "الطعم الأصلي لأطباق الشاورما مع الصوصات والباطاطس ",
];

let index = 0;

setInterval(() => {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });

  document.getElementById("heroTitle").textContent = titles[index];
  document.getElementById("heroDesc").textContent = descs[index];

  index = (index + 1) % slides.length;
}, 4000);

//Tabs
const Tabs = document.querySelectorAll(".tabs_list li");
const All = document.querySelectorAll(".item_wrap");
const sandwich = document.querySelectorAll(".sandwich");
const dishes = document.querySelectorAll(".dishes");
const food = document.querySelectorAll(".food");
const burger = document.querySelectorAll(".burger");
const potatos = document.querySelectorAll(".potatos");
const katchep = document.querySelectorAll(".katchep");
const beverage = document.querySelectorAll(".beverage");

Tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    Tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    const TabVal = tab.getAttribute("data-tabs");
    All.forEach((item) => {
      item.style.display = "none";
    });
    if (TabVal == "sandwich") {
      sandwich.forEach((item) => {
        item.style.display = "block";
      });
    } else if (TabVal == "beverage") {
      beverage.forEach((item) => {
        item.style.display = "block";
      });
    } else if (TabVal == "katchep") {
      katchep.forEach((item) => {
        item.style.display = "block";
      });
    } else if (TabVal == "dishes") {
      dishes.forEach((item) => {
        item.style.display = "block";
      });
    } else if (TabVal == "food") {
      food.forEach((item) => {
        item.style.display = "block";
      });
    } else if (TabVal == "burger") {
      burger.forEach((item) => {
        item.style.display = "block";
      });
    } else if (TabVal == "potatos") {
      potatos.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      All.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});
const themeToggle = document.getElementById("theme-toggle");
const html = document.querySelector("html");

if (localStorage.getItem("mode") == "dark") {
    darkMode();
} else 
{
    ligthMode();
 } 

themeToggle.addEventListener('click',(e)=>{
   if (localStorage.getItem("mode") == "ligth") {
    darkMode();
  } else {
     ligthMode();
  }
})
 function darkMode()
  {
    html.classList.add("dark");
    themeToggle.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark")
  }
 function ligthMode()
  {
    html.classList.remove("dark");
    themeToggle.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","ligth");
  }
   const shareBtn = document.getElementById('shareBtn');

  shareBtn.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: 'منيو مطعم مستر شاورما الفحم 👑',
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // fallback
      const url = encodeURIComponent(window.location.href);
      window.open(`https://wa.me/?text=${url}`, '_blank');
    }
  });

