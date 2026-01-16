const heroi = {
    nome: "Artur Fernandes Galdino" ,
    classe: "Aspirante a Dev",
    nivel: 1,
    xp: 0
};

async function atualizarTela() {
    event.preventDefault();
    document.getElementById("hero-nome").innerText = heroi.nome;
    document.getElementById("hero-classe").innerText = heroi.classe;
    document.getElementById("hero-nivel").innerText = heroi.nivel;
    document.getElementById("hero-xp").innerText = heroi.xp;

    let metaAtual = 0;
    let xpNaFase = 0;

    if (heroi.classe === "Aspirante a Dev") {
        metaAtual = 335; 
        xpNaFase = heroi.xp;
    } else if (heroi.classe === "Herói HTML") {
        metaAtual = 365;
        xpNaFase = heroi.xp - 335;
    } else if (heroi.classe === "Herói COM ARMADURA") {
        metaAtual = 460; 
        xpNaFase = heroi.xp - 700;
    } else {
        metaAtual = 1; 
        xpNaFase = 1;
    }

    let percentual = (xpNaFase / metaAtual) * 100;
    
    percentual = Math.min(Math.max(percentual, 0), 100);
    
    document.getElementById("xp-progresso").style.width = percentual + "%";
}

async function ganharXP() {
    heroi.xp += 50; 

    if (heroi.xp >= 335 && heroi.classe === "Aspirante a Dev") {
        heroi.classe = "Herói HTML";
        heroi.nivel = 2;
        alert("⚔️ Módulo HTML Completo! Você evoluiu para Herói HTML!");
    } 
    else if (heroi.xp >= 700 && heroi.classe === "Herói HTML") {
        heroi.classe = "Herói COM ARMADURA";
        heroi.nivel = 3;
        alert("🛡️ Módulo CSS Completo! Você agora tem uma Armadura!");
    }
    else if (heroi.xp >= 1160 && heroi.classe === "Herói COM ARMADURA") {
        heroi.classe = "Mago JavaScript do Reino Web";
        heroi.nivel = 99;
        alert("🧙‍♂️ Mestre do JS! A barra chegou ao fim da jornada!");
    }

    atualizarTela();
}

function enviarMsg() {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    
    if(nome === '' || email === ''){
        alert("Por favor insira os dados necessários!");
        return false;
    }else{
        heroi.nome = nome;
        alert("Obrigado pela mensagem!");
        return true;
    }
}
