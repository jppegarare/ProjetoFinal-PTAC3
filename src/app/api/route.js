import { NextResponse } from "next/server";

export const listaDeFilmes = [
    {
        id: 1,
        titulo: "Entre Facas e Segredos",
        imagem: "https://resizing.flixster.com/rF2w9NJvElSPHO-MruMr2YW1lE0=/206x305/v2/https://resizing.flixster.com/9siv752L7VqwwTJVHg1KENr6wlU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhmNTdjMmU2LTczODctNDUzOS05ODhjLWU0MDRhY2M4ZjMxMy53ZWJw",
        diretor: "Rian Johnson",
        anoEstreia: 2019,
        genero: "Mistério",
        sinopse: "As circunstâncias em torno da morte do romancista policial Harlan Thrombey são misteriosas, mas há uma coisa que o renomado Detetive Benoit Blanc sabe com certeza - todos na família Thrombey, extremamente disfuncional, são suspeitos. Agora, Blanc deve desvendar uma teia de mentiras e pistas falsas para descobrir a verdade."
    },
    {
        id: 2,
        titulo: "Django Livre",
        imagem: "https://resizing.flixster.com/cSxTPyfvBznDe9ezVA6wYwaphuE=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9287010_p_v13_au.jpg",
        diretor: "Quentin Tarantino",
        anoEstreia: 2012,
        genero: "Ação",
        sinopse: "Dois anos antes da Guerra Civil, Django (Jamie Foxx), um escravo, se encontra acompanhando um caçador de recompensas alemão não ortodoxo chamado Dr. King Schultz (Christoph Waltz) em uma missão para capturar os irmãos Brittle, cruéis. Com a missão bem-sucedida, Schultz liberta Django, e juntos eles caçam os criminosos mais procurados do Sul. Suas viagens os levam à infame plantação do obscuro Calvin Candie (Leonardo DiCaprio), onde a esposa há muito perdida de Django (Kerry Washington) ainda é escrava."
    },
    {
        id: 3,
        titulo: "Senhor dos Anéis: A Sociedade do Anel",
        imagem: "https://resizing.flixster.com/5opT-tFUEhOeMzsbrI8oZIm3EW8=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28828_p_v8_ao.jpg",
        diretor: "Peter Jackson",
        anoEstreia: 2001,
        genero: "Fantasia",
        sinopse: "O futuro da civilização repousa no destino do Um Anel, que está perdido há séculos. Forças poderosas são implacáveis em sua busca por ele. Mas o destino o colocou nas mãos de um jovem Hobbit chamado Frodo Baggins (Elijah Wood), que herda o Anel e entra para a lenda. Uma tarefa assustadora se apresenta a Frodo quando ele se torna o Portador do Anel - destruir o Um Anel nas chamas do Monte Doom, onde foi forjado."
    },
    {
        id: 4,
        titulo: "Trem Bala",
        imagem: "https://resizing.flixster.com/wwFE-DFGo0WPb0n4dXEtLkbnRe4=/206x305/v2/https://resizing.flixster.com/0Wuqfdlk2B3QUnrB7wPlQ7c47AI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI3OTIwZDU1LTEwNmQtNGYwZS1iNjhlLTIwNmU0MjdiYmY2MS5qcGc=",
        diretor: "David Leitch",
        anoEstreia: 2022,
        genero: "Ação",
        sinopse: "Em Trem-Bala, Brad Pitt estrela como Ladybug, um assassino azarado determinado a fazer seu trabalho pacificamente depois de muitos trabalhos que saíram dos trilhos. O destino, no entanto, pode ter outros planos, já que a última missão de Ladybug o coloca em rota de colisão com adversários letais de todo o mundo - todos com objetivos conectados, mas conflitantes - no trem mais rápido do mundo. Do diretor de Deadpool 2, David Leitch, o fim da linha é apenas o começo em uma corrida selvagem e sem parar através do Japão moderno."
    },
    {
        id: 5,
        titulo: "Divertida Mente 2",
        imagem: "https://resizing.flixster.com/j0-KuBjioJWd2FOkFRibLbofbWY=/206x305/v2/https://resizing.flixster.com/8yCWg9MRcT7LnnuHtqe1ACAyDHQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZmZDY4MmFmLTE2ZGYtNDY1NS1iZmY5LWZmYjVjZjBkNTk3OC5qcGc=",
        diretor: "Kelsey Mann",
        anoEstreia: 2024,
        genero: "Aventura",
        sinopse: "As vozes minúsculas dentro da cabeça de Riley a conhecem por dentro e por fora - mas no próximo verão, tudo muda quando Divertida Mente 2 da Disney e Pixar apresenta uma nova Emoção: Ansiedade."
    },
    {
        id: 6,
        titulo: "Viva: A Vida é uma Festa",
        imagem: "https://resizing.flixster.com/iCqOkQHPkLr2JMXeQAh8FHR2R_M=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/172117/172117_ac.jpg",
        diretor: "Lee Unkrich",
        anoEstreia: 2017,
        genero: "Aventura",
        sinopse: "Apesar da proibição de sua família à música, que durava gerações, o jovem Miguel sonha em se tornar um músico talentoso como seu ídolo Ernesto de la Cruz. Desesperado para provar seu talento, Miguel se encontra na deslumbrante e colorida Terra dos Mortos. Depois de conhecer um charmoso trapaceiro chamado Héctor, os dois novos amigos embarcam em uma jornada extraordinária para desvendar a verdadeira história por trás da história da família de Miguel."
    },
    {
        id: 7,
        titulo: "Gato de Botas 2: O Último Desejo",
        imagem: "https://resizing.flixster.com/GqqIhDj1pGjTU2X34cil5b9dgUo=/206x305/v2/https://resizing.flixster.com/vtIcjOYiM-QBXQyXhTFFgQoRkDw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JmNjM3ZTc2LTk5ZmMtNGJhNy04MDAzLWI3M2IxNmExNDNkYi5qcGc=",
        diretor: "Joel Crawford",
        anoEstreia: 2022,
        genero: "Ação",
        sinopse: "Neste outono, o felino favorito de todos, amante de leite, aventureiro e que desafia o medo, está de volta. Pela primeira vez em mais de uma década, a DreamWorks Animation apresenta uma nova aventura no universo Shrek, onde o audacioso fora da lei Gato de Botas descobre que sua paixão pelo perigo e desrespeito pela segurança cobraram seu preço. Gato de Botas já queimou oito de suas nove vidas, embora tenha perdido a conta ao longo do caminho. Recuperar essas vidas enviará Gato de Botas em sua maior aventura até agora. O indicado ao Oscar® Antonio Banderas retorna como a voz do notório Gato de Botas enquanto ele embarca em uma jornada épica pela Floresta Negra para encontrar a mítica Estrela Cadente e restaurar suas vidas perdidas. Mas com apenas uma vida restante, Gato de Botas terá que se humilhar e pedir ajuda à sua ex-parceira e inimiga: a cativante Kitty Patas Macias (indicada ao Oscar® Salma Hayek). Em sua jornada, Gato de Botas e Kitty serão auxiliados - contra sua própria vontade - por um rato desgrenhado, tagarela e incrivelmente alegre, Perro (Harvey Guillén, What We Do in the Shadows). Juntos, nosso trio de heróis terá que ficar um passo à frente de Goldilocks (indicada ao Oscar® Florence Pugh, Viúva Negra) e da Família do Crime dos Três Ursos, Big Jack Horner (vencedor do Emmy John Mulaney, Big Mouth) e o aterrorizante caçador de recompensas, O Lobo Mau (Wagner Moura, Narcos)."
    },
    {
        id: 8,
        titulo: "Homem-Aranha no Aranhaverso",
        imagem: "https://resizing.flixster.com/xVd9PLVkH69dU3Yo9XLSjdMeu1M=/206x305/v2/https://resizing.flixster.com/_l50Ahm00b-RO9Ao2s3AyMjUWiU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ExYTZmMWFkLWViZWItNDNhMS1iZTEwLTcxODk1YTk3NWFhMy53ZWJw",
        diretor: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
        anoEstreia: 2018,   
        genero: "Ação",
        sinopse: "Mordido por uma aranha radioativa no metrô, o adolescente do Brooklyn, Miles Morales, repentinamente desenvolve poderes misteriosos que o transformam no único e verdadeiro Homem-Aranha. Quando ele conhece Peter Parker, ele logo percebe que existem muitos outros que compartilham seus talentos especiais e voadores. Miles agora deve usar suas novas habilidades para lutar contra o malvado Kingpin, um louco corpulento que pode abrir portais para outros universos e trazer diferentes versões do Homem-Aranha para nosso mundo."
    },
];

export async function GET(){
    return NextResponse.json(listaDeFilmes)
}