document.querySelector('.logout-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('logout-form').submit();
});