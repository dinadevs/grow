carregaComponente(
    '../global/componentes/cabecalho/cabecalho.html',
    'cabecalho-global',
    '../global/componentes/cabecalho/cabecalho.js',    
    );

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const [nickResponsavel, senhaResponsavel, nickFilho, senhaFilho] = inputs;

        if (nickResponsavel.value.trim() === '' || nickFilho.value.trim() === '') {
            alert('Os campos de nickname não podem ficar vazios.');
            return;
        }

        if (nickResponsavel.value.trim() === nickFilho.value.trim()) {
            alert('O nickname do responsável e do filho devem ser diferentes.');
            return;
        }

        if (!validarSenha(senhaResponsavel.value) || !validarSenha(senhaFilho.value)) {
            alert('A senha deve conter no mínimo 8 caracteres, incluindo letra minúscula, maiúscula, número e caractere especial.');
            return;
        }

        let contas = JSON.parse(localStorage.getItem('contas')) || [];
        let jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];

        if (contas.some(c => c.nickname === nickResponsavel.value || c.nickname === nickFilho.value)) {
            alert('Nickname já existe!');
            return;
        }

        contas.push({ nickname: nickResponsavel.value, senha: senhaResponsavel.value, tipo: 'responsavel' });
        contas.push({ nickname: nickFilho.value, senha: senhaFilho.value, tipo: 'filho' });

        jogadores.push({
            nickname: nickFilho.value,
            responsavel: nickResponsavel.value,
            avatar: 'gato',
            nivel: 0,
            xp: 0,
            moedas: 0,
            historico_moedas: 0
        });

        localStorage.setItem('contas', JSON.stringify(contas));
        localStorage.setItem('jogadores', JSON.stringify(jogadores));

        mostraToast();

    
        setTimeout(() => {
            voltarParaLogin();
        }, 2000);
    });
});

function validarSenha(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?/{}~])[A-Za-z\d!@#$%^&*()_\-+=<>?/{}~]{8,}$/;
    return regex.test(senha);
}


function voltarParaLogin() {
    window.location.href = '../pagina-login/login.html';
}
