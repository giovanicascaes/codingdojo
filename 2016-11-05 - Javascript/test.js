/**
 * Created by giovanicascaes on 07/11/16.
 */
var test = require('tape');
var index = require('./index.js');

test('testando cheque', function (t) {
    t.equal(index.converterValorParaExtenso('1,00'), 'Um real', 'Deve retornar Um real');
    t.equal(index.converterValorParaExtenso('2,00'), 'Dois reais', 'Deve retornar Dois reais');
    t.equal(index.converterValorParaExtenso('3,00'), 'Três reais', 'Deve retornar Tres reais');
    t.equal(index.converterValorParaExtenso('3,40'), 'Três reais e quarenta centavos', 'Deve retornar Tres reais e quarenta centavos');
    t.equal(index.converterValorParaExtenso('15,00'), 'Quinze reais', 'Deve retornar Quinze reais');
    t.equal(index.converterValorParaExtenso('22,00'), 'Vinte e dois reais', 'Deve retornar Vinte e dois reais');
    t.equal(index.converterValorParaExtenso('29,03'), 'Vinte e nove reais e três centavos', 'Deve retornar Vinte e nove reais e três centavos');
    t.equal(index.converterValorParaExtenso('29,33'), 'Vinte e nove reais e trinta e três centavos', 'Deve retornar Vinte e nove reais e trinta e três centavos');
    t.equal(index.converterValorParaExtenso('30,30'), 'Trinta reais e trinta centavos', 'Deve retornar Trinta reais e trinta centavos');
    t.equal(index.converterValorParaExtenso('99,99'), 'Noventa e nove reais e noventa e nove centavos', 'Deve retornar Noventa e nove reais e noventa centavos');
    t.equal(index.converterValorParaExtenso('100,00'), 'Cem reais', 'Deve retornar Cem reais');
    t.equal(index.converterValorParaExtenso('101,01'), 'Cento e um reais e um centavo', 'Deve retornar Cento e um reais e um centavo');
    t.equal(index.converterValorParaExtenso('111,11'), 'Cento e onze reais e onze centavos', 'Deve retornar Cento e onze reais e onze centavos');
    t.equal(index.converterValorParaExtenso('954,65'), 'Novecentos e cinquenta e quatro reais e sessenta e cinco centavos', 'Deve retornar Novecentos e cinquenta e quatro reais e sessenta e cinco centavos');
    t.equal(index.converterValorParaExtenso('800,00'), 'Oitocentos reais', 'Deve retornar Oitocentos reais');
    t.equal(index.converterValorParaExtenso('1000,00'), 'Um mil reais', 'Deve retornar Um mil reais');
    t.equal(index.converterValorParaExtenso('1050,01'), 'Um mil e cinquenta reais e um centavo', 'Deve retornar Um mil e cinquenta reais e um centavo');
    t.equal(index.converterValorParaExtenso('167,00'), 'Cento e sessenta e sete reais', 'Deve retornar Cento e sessenta e sete reais');
    t.equal(index.converterValorParaExtenso('19167,00'), 'Dezenove mil cento e sessenta e sete reais', 'Deve retornar Dezenove mil cento e sessenta e sete reais');
    t.equal(index.converterValorParaExtenso('1000000001,00'), 'Um bilhão e um reais', 'Deve retornar Um bilhão de reais e um real');
    t.equal(index.converterValorParaExtenso('1102001020,00'), 'Um bilhão cento e dois milhões um mil e vinte reais', 'Deve retornar Um bilhão cento e dois milhões um mil e vinte reais');
    t.equal(index.converterValorParaExtenso('1102000000,00'), 'Um bilhão cento e dois milhões de reais', 'Deve retornar Um bilhão cento e dois milhões de reais');
    t.equal(index.converterValorParaExtenso('2100000000,00'), 'Dois bilhões e cem milhões de reais', 'Deve retornar Dois bilhões e cem milhões de reais');
    t.equal(index.converterValorParaExtenso('20000020000,00'), 'Vinte bilhões e vinte mil reais', 'Deve retornar Vinte bilhões e vinte mil reais');
    t.equal(index.converterValorParaExtenso('501000001000000,00'), 'Quinhentos e um trilhões e um milhão de reais', 'Deve retornar Quinhentos e um trilhões e um milhão de reais');
    t.equal(index.converterValorParaExtenso('999999999999999,99'), 'Novecentos e noventa e nove trilhões novecentos e noventa e nove bilhões novecentos e noventa e nove milhões novecentos e noventa e nove mil novecentos e noventa e nove reais e noventa e nove centavos', 'Deve retornar Novecentos e noventa e nove trilhões novecentos e noventa e nove bilhões novecentos e noventa e nove milhões novecentos e noventa e nove mil novecentos e noventa e nove reais e noventa e nove centavos');
    t.equal(index.converterValorParaExtenso('501000005000010,00'), 'Quinhentos e um trilhões cinco milhões e dez reais', 'Deve retornar Quinhentos e um trilhões cinco bilhões e dez reais');
    t.equal(index.converterValorParaExtenso('100000000000,00'), 'Cem bilhões de reais', 'Deve retornar Cem bilhões de reais');
    t.equal(index.converterValorParaExtenso('20000021000,00'), 'Vinte bilhões vinte e um mil reais', 'Deve retornar Vinte bilhões vinte e um mil reais') ;

    t.end();
});