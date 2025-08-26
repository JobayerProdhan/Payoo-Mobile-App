const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = 'index.html';
});