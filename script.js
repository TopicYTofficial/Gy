function showInfo(title, verifier, id, status) {
    document.getElementById('title').textContent = title;
    document.getElementById('verifier').textContent = verifier;
    document.getElementById('id').textContent = id;
    document.getElementById('status').textContent = status;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Закрытие при клике вне окна
window.onclick = function(event) {
    if (event.target === document.getElementById('modal')) {
        closeModal();
    }
}
