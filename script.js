//Criação de uma timeline do GSAP com animações sincronizadas com o scroll


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two', //Quando a classe two aparecer começa//
        start: '0% 95%',//Aonde vai começar//
        end: '70% 50%', //Aonde que finaliza//
        scrub: true,
        markers: true, //Depuração//
    }
});

tl.to(
    '#fanta',
    {
        top: '120%', //Move o elemento com fanta par 120% do topo
        left: '0%',
    },
    'orange'

);

tl.to(
    '#laranja-cortada',
    {
        top: '160%', 
        left: '23%',
    },
    'orange'

);
tl.to(
    '#laranja',
    {
        width: '15%', //Reduz a largura do elemento//
        top: '160%', 
        left: '10%',
    },
    'orange'

);
tl.to(
    '#folha',
    {
        top: '110%', 
        rotate: '530deg', //Rotação da folha
        left: '70%',
    },
    'orange'

);
tl.to(
    '#folha2',
    {
        top: '110%', 
        rotate: '130deg', //Rotação da folha
        left: '0%',
    },
    'orange'

);

//CRIANDO OUTRA TIME LINE

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three', //Quando a classe two aparecer começa//
        start: '0% 95%',//Aonde vai começar//
        end: '20% 50%', //Aonde que finaliza//
        scrub: true,
        markers: true, //Depuração//
    }
});
tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);
tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
         top: '110%',
        left: '-100%',
    },
    'ca'
);
tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        width: '33%',
        left: '34%',
        top: '215%',
    },
    'ca'
);