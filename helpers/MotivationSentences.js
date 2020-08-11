class MotivationSentences {

    constructor() {
        throw new Error('Esta classe não deve ser instanciada.')
    }

    static raffleSentence() {
        
        const motivationSentences = [
            '"Fique de olho em quem dá certo, não em quem está desanimado. Este processo seletivo é fundamental para o seu sucesso." - Flávio Augusto',
            '"Se o conselho é bom, o exemplo arrasta." - Rony Meisler', 
            '"As pessoas não sabem o que querem, até mostrarmos a elas." - Steve Jobs',
            '"Você pode encarar um erro como uma besteira a ser esquecida ou como um resultado que aponta uma nova direção." - Steve Jobs',
            '"Se quer uma vida feliz, amarre-se as metas, não as coisas, nem as pessoas." - Albert Einstein',
            '"A força não provém da capacidade física, mas sim de uma vontade indomável." - Mahatma Gandhi',
            '"Não importa o quão lento você vá, desde que não pare." - Confucio',
            '"A única coisa entre você e o seu objetivo é a história que você sempre usa para não alcança-lo." - Jordan Belfort',
            '"Quando você dá para as pessoas um motivo bom o suficiente, elas encontram um como." - Jordan Belfort',
            '"A melhor maneira de vender algo: não vender nada. Ganhe a consciência, o respeito e a confiança daqueles que podem comprar." - Jordan Belfort',
            '"Trabalhe duro e em silêncio. Deixe que o seu sucesso faça barulho." - Dale Carnegie'
            ]
        
        return motivationSentences[Math.floor(Math.random () * motivationSentences.length)]
    };

};