document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.nav-menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove a classe 'ativo' de todos os itens
            menuItems.forEach(el => el.classList.remove('ativo'));

            // Adiciona a classe 'ativo' ao item clicado
            item.classList.add('ativo');
        });
    });
});
