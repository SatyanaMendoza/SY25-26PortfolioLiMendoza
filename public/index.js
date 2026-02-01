function toggleMenu(n) {
    const menu = document.getElementById('dropdown' + n);

    document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== menu) d.classList.remove('active');
    });

    menu.classList.toggle('active');
}
