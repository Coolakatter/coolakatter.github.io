document.addEventListener('DOMContentLoaded', function() {
    const enContent = document.getElementById('en-content');
    const svContent = document.getElementById('sv-content');
    const enButton = document.getElementById('en-btn');
    const svButton = document.getElementById('sv-btn');

        document.getElementById('en-btn').addEventListener('click', () => {
        window.location.href = '../en/index.html';
    });
    
    document.getElementById('sv-btn').addEventListener('click', () => {
        window.location.href = '../sv/index.html';
    });

    enButton.addEventListener('click', function() {
        enContent.classList.add('active');
        svContent.classList.remove('active');
        enButton.classList.add('active');
        svButton.classList.remove('active');
    });

    svButton.addEventListener('click', function() {
        svContent.classList.add('active');
        enContent.classList.remove('active');
        svButton.classList.add('active');
        enButton.classList.remove('active');
    });
});