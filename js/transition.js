window.addEventListener('load', function() {
    var loader = document.getElementById('loading-container');
    var content = document.getElementById('content');
    
    document.body.classList.remove('loading');
    content.style.display = 'block';
    loader.style.display = 'none';
    
    content.classList.add('fade-in');
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            if (link.target === '_blank') return; // Ignore links that open in a new tab
            event.preventDefault();
            let href = this.getAttribute('href');
            
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 500); // Tempo em ms que deve corresponder à duração da animação
        });
    });

    window.addEventListener('pageshow', function() {
        document.body.classList.add('fade-in');
    });
});
