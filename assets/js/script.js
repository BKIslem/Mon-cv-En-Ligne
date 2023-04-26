document.querySelectorAll('logo').forEach(item => {
    item.addEventListener('click', darkMode);
  });
  function darkMode() {
    let body = document.querySelector('body');
    let mode = this.dataset.mode;
    body.dataset.theme = mode;
  }