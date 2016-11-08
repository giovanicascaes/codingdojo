var unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
var dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
var centenas = ['cem', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seissentos', 'setessentos', 'oitocentos', 'novecentos'];
var demaisUnidades = [['mil', 'mil'], ['milhão', 'milhões'], ['bilhão', 'bilhões'], ['trilhão', 'trilhões'], ['quatrilhão', 'quatrilhões']];

var and = ' e ';

module.exports = {
    converterValorParaExtenso: function (valor) {
        var arrayValores = valor.split(',');

        var reais = arrayValores[0];
        var centavos = arrayValores[1];

        var valorPorExtenso = converterReais(reais);

        if (parseInt(centavos) > 0) {
            valorPorExtenso += and + converterCentavos(centavos);
        }

        valorPorExtenso = capitalizeFirstLetter(valorPorExtenso);

        return valorPorExtenso;
    }
};

function converterReais(reais) {
    return converterNumero(reais, true);
}

function converterCentavos(reais) {
    return converterNumero(reais, false);
}

function converterNumero(valor, real) {
    var valorPorExtenso = '';

    var valorInt = parseInt(valor);

    if (valorInt > 0) {
        if (valorInt <= 19) {
            valorPorExtenso += unidades[valorInt];
        } else if (valorInt <= 99) {
            var valorIntString = valorInt.toString();
            valorPorExtenso += dezenas[valorIntString.charAt(0)];

            if (valorIntString.charAt(1) != '0') {
                valorPorExtenso += and + unidades[valorIntString.charAt(1)];
            }
        } else if (valorInt <= 999) {
            var dezena = valor.substr(1, 2);
            var dezenaInt = parseInt(dezena);

            if (valor.charAt(0) == '1' && dezenaInt == 0) {
                valorPorExtenso += centenas[0];
            } else {
                valorPorExtenso += centenas[valor.charAt(0)];

                if (dezenaInt > 0) {
                    valorPorExtenso += and + converterNumero(dezena)
                }
            }
        } else {
            var tamanhoNumero = valor.length;
            var modTres = tamanhoNumero % 3;

            var countFirstNumbers = modTres == 0 ? 3 : modTres;
            var countUnidades = modTres == 0 ? Math.floor(tamanhoNumero / 3) - 1 : Math.floor(tamanhoNumero / 3);

            var firstNumbers = valor.substr(0, countFirstNumbers);
            var lastNumbers = valor.substr(countFirstNumbers);
            var firstNumbersInt = parseInt(firstNumbers);
            var lastNumbersInt = parseInt(lastNumbers);

            var firstNumbersGreaterThanZero = firstNumbersInt > 0;

            if (firstNumbersGreaterThanZero) {
                valorPorExtenso += converterNumero(firstNumbers) + ' ' + demaisUnidades[countUnidades - 1][firstNumbersInt > 1 ? 1 : 0];
            }

            if (lastNumbersInt > 0) {
                // FIXME: Rever essa lógica
                if (lastNumbersInt <= 99 || ((lastNumbers.charAt(0) == '0' || lastNumbers.charAt(2) == '0') && parseInt(lastNumbers.substr(3)) == 0)) {
                    valorPorExtenso += and;
                } else if (firstNumbersGreaterThanZero) {
                    valorPorExtenso += ' ';
                }

                valorPorExtenso += converterNumero(lastNumbers);
            } else if (countUnidades > 1) {
                valorPorExtenso += ' de';
            }
        }

        if (real != undefined) {
            if (real) {
                valorPorExtenso += ' ' + (valorInt > 1 ? 'reais' : 'real');
            } else {
                valorPorExtenso += ' ' + (valorInt > 1 ? 'centavos' : 'centavo');
            }
        }
    }

    // FIXME: Gambiarra
    return valorPorExtenso.replace('  ', ' ');
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}