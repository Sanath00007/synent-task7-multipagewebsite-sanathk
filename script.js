/* ============================================
   Lumen Studio — Shared Script
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile navigation toggle ---- */
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close the menu when a link is tapped (mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---- Highlight the active page in the navbar ---- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  /* ---- Contact form validation ---- */
  var contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;

      var nameField = document.getElementById('name');
      var emailField = document.getElementById('email');
      var messageField = document.getElementById('message');

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Reset previous error states
      [nameField, emailField, messageField].forEach(function (field) {
        field.closest('.form-group').classList.remove('has-error');
      });

      if (nameField.value.trim() === '') {
        nameField.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      if (emailField.value.trim() === '' || !emailPattern.test(emailField.value.trim())) {
        emailField.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      if (messageField.value.trim() === '') {
        messageField.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      var statusBox = document.getElementById('form-status');

      if (isValid) {
        statusBox.textContent = 'Thanks, ' + nameField.value.trim() + '! Your message has been received. We\'ll get back to you soon.';
        statusBox.classList.add('visible');
        contactForm.reset();
      } else {
        statusBox.textContent = 'Please fill in all fields with a valid email address.';
        statusBox.classList.add('visible');
      }
    });
  }

});