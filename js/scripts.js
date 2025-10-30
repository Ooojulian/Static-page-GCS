document.addEventListener("DOMContentLoaded", function() {

    // --- Cargar Menú ---
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;
            
            // --- Manejar enlace activo ---
            // Obtener el nombre del archivo de la página actual
            let path = window.location.pathname;
            let page = path.split("/").pop();
            
            // Si la página está vacía (es la raíz), asigna 'index.html'
            if (page === '') {
                page = 'index.html';
            }

            // Encontrar todos los enlaces del menú
            const navLinks = document.querySelectorAll('#menu-placeholder .nav-link');
            
            // Recorrer los enlaces y añadir 'active' al que coincida
            navLinks.forEach(link => {
                if (link.getAttribute('href') === page) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Error al cargar el menú:', error));

    // --- Cargar Footer ---
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el footer:', error));

});