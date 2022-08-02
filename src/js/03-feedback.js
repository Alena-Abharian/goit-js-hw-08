import lodashThrottle from 'lodash.throttle';

const KEY_LOCAL_STORAGE = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const formEL = document.querySelector('.feedback-form');

formEL.addEventListener('submit', onFormSubmit);
formEL.addEventListener('input', lodashThrottle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(KEY_LOCAL_STORAGE);
  console.log(formData);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(formData));
}

function savedMessage() {
  formData = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)) ?? formData;

  try {
    for (let key in formData) {
      formEL.elements[key].value = formData[key];
    }
  } catch ({ name, message }) {
    console.log(name);
    console.log(message);
  }
}

savedMessage();