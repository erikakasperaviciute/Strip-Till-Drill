"use strict";
// Mobile menu
document.getElementById('mobile-menu-trigger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.toggle('active');
  });
  
  document.getElementById('menu-item').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.remove('active');
  });