document.addEventListener("DOMContentLoaded", () => {
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if(entry.target.id === 'numeros' || entry.target.classList.contains('grid-numeros')) {
                    animarNumeros();
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal, .barra-numeros').forEach(section => {
        observer.observe(section);
    });

    let numerosAnimados = false; 

    function animarNumeros() {
        if (numerosAnimados) return;
        
        const contadores = document.querySelectorAll('.contador');
        const speed = 200; 

        contadores.forEach(contador => {
            const atualizarContagem = () => {
                const alvo = +contador.getAttribute('data-target');
                const atual = +contador.innerText.replace('+ de ', '');
                
                const incremento = alvo / speed;

                if (atual < alvo) {
                    contador.innerText = `+ de ${Math.ceil(atual + incremento)}`;
                    setTimeout(atualizarContagem, 10);
                } else {
                    contador.innerText = `+ de ${alvo}`;
                }
            };
            atualizarContagem();
        });
        numerosAnimados = true;
    }

    const sliderComparacao = document.getElementById('slider-comparacao');
    const imgAntesOverlay = document.getElementById('img-antes-overlay');

    if (sliderComparacao && imgAntesOverlay) {
        sliderComparacao.addEventListener('input', (e) => {
            const valor = e.target.value;
            imgAntesOverlay.style.width = `${valor}%`; 
        });
    }
});

    const chatPopup = document.getElementById('chatPopup');
    const abrirChat = document.getElementById('abrirChat');
    const fecharChat = document.getElementById('fecharChat');

    if (chatPopup && abrirChat && fecharChat) {
        setTimeout(() => {
            chatPopup.style.display = 'block';
        }, 25000);

        fecharChat.addEventListener('click', () => {
            chatPopup.style.display = 'none';
        });

        abrirChat.addEventListener('click', () => {
            if (chatPopup.style.display === 'none') {
                chatPopup.style.display = 'block';
            } else {
                chatPopup.style.display = 'none';
            }
        });
    }

        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const linksMobile = document.querySelectorAll('.link-mobile');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('ativo');
            });

            linksMobile.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('ativo');
                });
            });
        }

        const spanHora = document.querySelector('.chat-hora');
    
        if (spanHora) {
            const dataAtual = new Date();
            const horas = String(dataAtual.getHours()).padStart(2, '0');
            const minutos = String(dataAtual.getMinutes()).padStart(2, '0');

            spanHora.textContent = `${horas}:${minutos}`;
        }

        const cookieBanner = document.getElementById('cookie-banner');
        const btnAceitarCookies = document.getElementById('aceitar-cookies');

        if (cookieBanner && btnAceitarCookies) {
            const cookiesAceitos = localStorage.getItem('cookiesGuairaca');

            if (!cookiesAceitos) {
                setTimeout(() => {
                    cookieBanner.classList.add('mostrar');
                }, 1000);
            }

            btnAceitarCookies.addEventListener('click', () => {
                localStorage.setItem('cookiesGuairaca', 'true');
                cookieBanner.classList.remove('mostrar');
            });
        }