'use strict';

const forms = document.querySelectorAll('form');

forms.forEach(form =>
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formSection = event.target.closest('.auth-section');
    if (!formSection.nextElementSibling) return;
    formSection.classList.add('hidden');
    formSection.nextElementSibling.classList.remove('hidden');
  })
);

////////////////
const radioContainer = document.querySelector('.form-radio-group');
const radioTargets = document.querySelectorAll('.form-radio-target');
const individualForms = document.querySelectorAll('.form-individual');
const brandForm = document.querySelector('.form-brand');

const toggleRadioButton = function (event) {
  if (!event.target.classList.contains('radio')) return;
  const element = event.target;

  radioTargets.forEach(target => target.classList.add('hidden'));

  if (element.classList.contains('individual')) {
    individualForms.forEach(form => form.classList.remove('hidden'));
  } else {
    brandForm.classList.remove('hidden');
  }
};

radioContainer.addEventListener('click', toggleRadioButton);
