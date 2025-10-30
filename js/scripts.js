// --- CÓDIGO PARA CARGAR COMPONENTES ---

document.addEventListener("DOMContentLoaded", function() {

    // --- Cargar Menú ---
    fetch('/Static-page-GCS/menu.html') // Borra todo esto
        .then(response => response.text())
        .then(data => {
            // ... (Borra todo hasta el final)
        })
        .catch(error => console.error('Error al cargar el menú:', error));

    // --- Cargar Footer ---
    fetch('/Static-page-GCS/footer.html') // Borra todo esto
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el footer:', error));

});
