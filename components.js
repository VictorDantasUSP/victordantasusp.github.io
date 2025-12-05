/* COMPONENTES GLOBAIS
   - Header (Logo + Ícones)
   - Menu (Navegação)
   - Footer (Rodapé)
*/

// 1. HEADER
const headerContent = `
<header class="header-pattern py-6 relative">
    <div class="max-w-6xl mx-auto px-4 w-full relative flex flex-col md:block">
        <div class="flex justify-center gap-4 mb-4 md:mb-0 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 z-20">
            <a href="https://www.facebook.com/gironomundo" target="_blank" class="text-blue-800 text-2xl hover:scale-110 transition"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.youtube.com/gironomundo" target="_blank" class="text-red-600 text-2xl hover:scale-110 transition"><i class="fab fa-youtube-square"></i></a>
            <a href="https://www.instagram.com/gironomundo" target="_blank" class="text-pink-600 text-2xl hover:scale-110 transition"><i class="fab fa-instagram-square"></i></a>
        </div>
        <div class="text-center w-full">
            <a href="/" class="inline-block">
                <!-- Usei o caminho absoluto /images para funcionar em qualquer pasta -->
                <img src="/images/Logo Completo.png" alt="Giro no Mundo" class="h-auto md:h-[189px] w-auto max-w-full md:max-w-[529px] mx-auto object-contain">
            </a>
        </div>
    </div>
</header>
`;

// 2. MENU
// AJUSTE REALIZADO: Os links agora apontam para diretórios (/destinos/) e não arquivos (.html)
const menuContent = `
<nav class="bg-[#333333] min-h-[61px] h-auto text-white shadow-md sticky top-0 z-50 border-t border-gray-600 flex items-center py-2">
    <div class="container mx-auto px-4">
        <ul class="flex flex-wrap justify-center items-center text-sm md:text-base font-bold tracking-wider uppercase font-oswald w-full gap-y-2">
            <li class="menu-item flex items-center whitespace-nowrap">
                <a href="/" class="nav-link">Página Inicial</a>
                <span class="menu-separator"></span>
            </li>
            <li class="menu-item flex items-center whitespace-nowrap">
                <!-- MUDANÇA AQUI: Link aponta para a pasta, não para o arquivo -->
                <a href="/destinos/" class="nav-link">Destinos</a>
                <span class="menu-separator"></span>
            </li>
            <li class="menu-item flex items-center whitespace-nowrap">
                <a href="#" class="nav-link">Roteiros</a>
                <span class="menu-separator"></span>
            </li>
            <li class="menu-item flex items-center whitespace-nowrap">
                <a href="#" class="nav-link">Morando Fora</a>
                <span class="menu-separator"></span>
            </li>
            <li class="menu-item flex items-center whitespace-nowrap">
                <a href="#" class="nav-link">Dicas</a>
                <span class="menu-separator"></span>
            </li>
            <li class="menu-item flex items-center whitespace-nowrap">
                <a href="#" class="nav-link">Sobre</a>
                <span class="menu-separator"></span>
            </li>
            <li class="menu-item flex items-center whitespace-nowrap">
                <a href="#" class="nav-link">Contato</a>
            </li>
        </ul>
    </div>
</nav>
`;

// 3. FOOTER
const footerContent = `
<footer class="bg-[#444444] text-white py-16 border-t-4 border-gray-600 mt-auto">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div class="text-left">
                <h4 class="font-bold text-xl uppercase tracking-widest mb-6 font-oswald">Direitos Autorais</h4>
                <p class="text-sm leading-relaxed text-gray-300 font-montserrat">Conteúdo protegido por direitos autorais.<br>Copyright © 2019 Giro no Mundo</p>
            </div>
            <div class="text-left md:text-right">
                <h4 class="font-bold text-xl uppercase tracking-widest mb-6 font-oswald">Contato</h4>
                <div class="text-sm text-gray-300 flex flex-col md:items-end gap-3 font-montserrat">
                    <div class="flex items-center gap-3"><i class="fas fa-envelope"></i><span>izabellapietro@hotmail.com</span></div>
                    <div class="flex items-center gap-3"><i class="fas fa-map-marker-alt"></i><span>Ribeirão Preto, São Paulo</span></div>
                </div>
            </div>
        </div>
    </div>
</footer>
`;

// FUNÇÃO DE INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", function() {
    
    // Injetar Header
    const appHeader = document.getElementById("app-header");
    if (appHeader) appHeader.innerHTML = headerContent;

    // Injetar Menu
    const appMenu = document.getElementById("app-menu");
    if (appMenu) {
        appMenu.innerHTML = menuContent;
        setActiveLink(appMenu);
    }

    // Injetar Footer
    const appFooter = document.getElementById("app-footer");
    if (appFooter) appFooter.innerHTML = footerContent;
});

// Função auxiliar para marcar o link ativo baseado na URL atual
function setActiveLink(menuElement) {
    // Normaliza o pathname removendo barra final e index.html para comparação
    let currentPath = window.location.pathname;
    
    // Remove 'index.html' se estiver presente
    currentPath = currentPath.replace(/\/index\.html$/, '/');
    
    // Garante que termina com / se não for a raiz vazia (opcional, dependendo de como o browser reporta)
    if (currentPath.length > 1 && !currentPath.endsWith('/')) {
        currentPath += '/';
    }

    const links = menuElement.querySelectorAll(".nav-link");

    links.forEach(link => {
        let href = link.getAttribute("href");
        
        // Comparação exata
        if (href === currentPath) {
            link.classList.add("active");
        }
    });
}
