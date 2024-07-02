// // Obtenha os dados da URL
// const urlParams = new URLSearchParams(window.location.search);
// const sintomasSelecionadas = urlParams.get('sintomascheck').split(',');

// // Exiba os sintomas selecionadas na div
// const divSintomas = document.getElementById('checkboxsSelecionados');
// sintomasSelecionadas.forEach(sintoma => {
//     const p = document.createElement('p');
//     p.textContent = sintoma;
//     divSintomas.appendChild(p);
// });

document.addEventListener('DOMContentLoaded', function() {
    // Obtenha os dados da URL
    const urlParams = new URLSearchParams(window.location.search);
    const sintomasSelecionados = urlParams.get('sintomascheck').split(',');

    // Exiba os sintomas selecionados na div
    const divSintomas = document.getElementById('checkboxsSelecionados');
    divSintomas.textContent = sintomasSelecionados.join(', ');

        // const sintomasSelecionados = document.querySelectorAll('input[name="sintomas"]:checked');
        const pontuacao = {
            Leptospirose: 0,
            Tetano: 0,
            DiarreiaAguda: 0,
            HepatiteA: 0,
            Dengue: 0,
            AnimaisPeconhentos: 0
            // Adicione outras doenças aqui
        };
    
        sintomasSelecionados.forEach((sintoma) => {
            const nomeSintoma = sintoma.trim(); // Remova espaços em branco
            // Atualize a pontuação com base no sintoma selecionado
            // Exemplo: if (nomeSintoma === 'Dor nas articulações') pontuacao.Leptospirose += 1;
            
            if (nomeSintoma === 'Dor nas articulações') pontuacao.Leptospirose += 1;
            if (nomeSintoma === 'Dor nas articulações') pontuacao.Dengue += 1;
            if (nomeSintoma === 'Dor nas articulações') pontuacao.HepatiteA += 1;
            if (nomeSintoma === 'Dor de garganta') pontuacao.Leptospirose += 1;
            if (nomeSintoma === 'Dor de cabeça') pontuacao.Dengue += 1;
            if (nomeSintoma === 'Dor de cabeça') pontuacao.Tetano += 1;
            if (nomeSintoma === 'Dor de cabeça') pontuacao.Leptospirose += 1;
            if (nomeSintoma === 'Dor muscular') pontuacao.Leptospirose += 1;
            if (nomeSintoma === 'Dor muscular intensa') pontuacao.Tetano += 1;
            if (nomeSintoma === 'Espasmos musculares') pontuacao.Tetano += 1;
            if (nomeSintoma === 'Rigidez dos músculos do pescoço') pontuacao.Tetano += 1;
            if (nomeSintoma === 'Músculos da barriga duros e doloridos') pontuacao.Tetano += 1;
            if (nomeSintoma === 'Dor ao falar ou comer ou movimentar a mandíbula') pontuacao.Tetano += 1;
            if (nomeSintoma === 'Dor ao bocejar') pontuacao.Tetano += 1;
            if (nomeSintoma === 'Dor abdominal') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Dor ou desconforto abdominal particularmente na região onde está localizado o fígado') pontuacao.HepatiteA += 1;
            if (nomeSintoma === 'Dor na parte de trás dos olhos') pontuacao.Dengue += 1;
            if (nomeSintoma === 'Olhos vermelhos') pontuacao.Leptospirose += 1;
            if (nomeSintoma === 'Erupções cutâneas') pontuacao.Dengue += 1;
            if (nomeSintoma === 'Erupções cutâneas') pontuacao.Leptospirose += 1;
            if (nomeSintoma === 'Dificuldade e dor para abrir a boca') pontuacao.Tetano += 1;
            if (nomeSintoma === 'Dificuldade para engolir') pontuacao.Tetano += 1;
            if (nomeSintoma === 'Cãibra na mandíbula') pontuacao.Tetano += 1;
            if (nomeSintoma === 'Perda de apetite') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Perda de apetite') pontuacao.HepatiteA += 1;
            if (nomeSintoma === 'Perda de peso') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Amarelamento dos olhos e da pele') pontuacao.HepatiteA += 1;
            if (nomeSintoma === 'Sangramentos leves') pontuacao.Dengue += 1;
            if (nomeSintoma === 'Sangramentos') pontuacao.Leptospirose += 1;
            if (nomeSintoma === 'Cólicas estomacais e inchaço') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Prisão de ventre intermitente') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Inchaco') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Febre alta') pontuacao.Leptospirose += 1;
            if (nomeSintoma === 'Febre e calafrios') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Febre inferior a 38°C') pontuacao.Tetano += 1;
            if (nomeSintoma === 'Febre inferior a 38°C') pontuacao.HepatiteA += 1;
            if (nomeSintoma === 'Início repentino de febre muito alta') pontuacao.Dengue += 1;
            if (nomeSintoma === 'Desidratação') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Fadiga') pontuacao.HepatiteA += 1;
            if (nomeSintoma === 'Fadiga') pontuacao.Dengue += 1;
            if (nomeSintoma === 'Fadiga') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Vômito') pontuacao.Leptospirose += 1;
            if (nomeSintoma === 'Vômito') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Vômito') pontuacao.HepatiteA += 1;
            if (nomeSintoma === 'Vômito') pontuacao.Dengue += 1;
            if (nomeSintoma === 'Náuseas') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Náuseas') pontuacao.HepatiteA += 1;
            if (nomeSintoma === 'Diarréia aquosa com muco ou pus') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Passagem dolorosa de fezes') pontuacao.DiarreiaAguda += 1;
            if (nomeSintoma === 'Fezes com cor de argila') pontuacao.HepatiteA += 1;
            if (nomeSintoma === 'Urina escura') pontuacao.HepatiteA += 1;
            if (nomeSintoma === 'Dor após 30-60 minutos depois da picada de um inseto ou animal') pontuacao.AnimaisPeconhentos += 1;
            if (nomeSintoma === 'Eritema') pontuacao.AnimaisPeconhentos += 1;
            if (nomeSintoma === 'Hematoma') pontuacao.AnimaisPeconhentos += 1;
            if (nomeSintoma === 'Formação de bolhas e às vezes com áreas ulceração') pontuacao.AnimaisPeconhentos += 1;

        });
    
        // Calcule as probabilidades com base nas pontuações
        const totalPontuacao = Object.values(pontuacao).reduce((acc, val) => acc + val, 0);
        const probabilidades = {};
        for (const doenca in pontuacao) {
        if (pontuacao[doenca] >= 3) {
            probabilidades[doenca] = 'alta';
        } else if (pontuacao[doenca] >= 1) {
            probabilidades[doenca] = 'média';
        } else {
            probabilidades[doenca] = 'baixa';
        }
    }
    
        // Exiba as probabilidades no elemento HTML
        document.getElementById('resultado').innerHTML = `
        <p>Existe uma chance ${probabilidades.Leptospirose} de que você tenha Leptospirose.</p>
        <p>Existe uma chance ${probabilidades.Tetano} de que você tenha Tétano.</p>
        <p>Existe uma chance ${probabilidades.Dengue} de que você tenha Dengue.</p>
        <p>Existe uma chance ${probabilidades.DiarreiaAguda} de que você tenha Diarreia aguda.</p>
        <p>Existe uma chance ${probabilidades.HepatiteA} de que você tenha Hepatite A.</p>
        <p>Existe uma chance ${probabilidades.AnimaisPeconhentos} de que você tenha sido picado por um Animal peçonhento.</p>
        `;
    

});