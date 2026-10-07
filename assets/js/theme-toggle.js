(function () {
  var button = document.getElementById('theme-toggle');
  var icon = document.getElementById('theme-toggle-icon');
  if (!button) return;

  function updateIcon(theme) {
    icon.innerHTML = theme === 'dark' ? '&#9728;&#65039;' : '&#127769;';
  }

  updateIcon(document.documentElement.getAttribute('data-theme'));

  button.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
  });
})();
