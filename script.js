// script.js

// تحديد عناصر النافبار
const menuToggle = document.querySelector('.menu-toggle'); // أيقونة ☰
const navLinks = document.querySelector('.nav-links');     // قائمة الروابط

// فتح أو إغلاق القائمة عند الضغط على أيقونة الموبايل
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // يضيف أو يزيل كلاس active
});

// إغلاق القائمة تلقائياً عند الضغط على أي رابط (تجربة مستخدم أفضل)
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// اختياري: تغيير لون النافبار عند التمرير (Sticky Navbar Effect)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar-new');
  if(window.scrollY > 50){
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

