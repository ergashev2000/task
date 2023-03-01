const tabs = document.querySelectorAll(".tab-header li");
const tabContent = document.querySelectorAll(".tab-content .tab-item");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });

    this.classList.add("active");

    tabContent.forEach(function (content) {
      content.classList.remove("active");
    });

    const tabId = this.getAttribute("data-tab");
    const tab = document.getElementById(tabId);
    tab.classList.add("active");
  });
});



const showButton = document.getElementById("show-number");
const phoneNumber = document.getElementById("phone");

showButton.addEventListener("click", function() {
  phoneNumber.textContent = "+998 71 207-00-11";
});


const langItems = document.querySelectorAll(".lang__item");

langItems.forEach((item) => {
  item.addEventListener("click", () => {
    langItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});


const tabHeader = document.querySelector('.tab-header');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
  tabHeader.scrollBy({
    left: -200, 
    behavior: 'smooth',
  });
});

nextBtn.addEventListener('click', () => {
  tabHeader.scrollBy({
    left: 200, 
    behavior: 'smooth',
  });
});