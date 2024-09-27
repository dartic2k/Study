


//document.getElementById("texto").innerHTML="O meu primeiro texto em <b>JS</b>!";
//console.log("Olá isto é um assalto na consola.log");
/*let a,b,c;
a=5;
b=6;
c=7;
*/
var a = 1;
var b = 5;
var c = a * b;
//console.log(c);

var pote = "cerelac";
//console.log(pote);

//declaração de variaveis
var nome, sobrenome, nomeCompleto, idade, somaX;
//atribuição dos valores
nome="Dimitri";
sobrenome="Teixeira";
idade=30;
nomeCompleto=nome +" "+ sobrenome;
somaX = idade + 10;
pessoa = nome + " " + somaX;

//document.getElementById("texto").innerHTML = pessoa;


const x=30;

{
    const x=2;
    //document.getElementById("texto").innerHTML = x;
}

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 += valor2;
//alert(valor1);

valor1 = 8;
valor2 = 8;
total = (valor1 === valor2);
//alert(total);

/*
== Verifica se é igual
=== Verifica se é igual e o tipo (texto/numero,etc)
+= Soma sem repetir
-=
/=
!= Verifica se é diferente
!== Verifica se é diferente e o tipo (texto/numero,etc)
<= menor ou igual
>= maior ou igual
&& "e" exemplo de baixo- resultado = idade maior que 60 E idade menor que 70 para ser true
|| ou uma condiçao (idade 65 OU ideade 72)
! Não por exemplo, idade não é igual a 65 = true



var idade, eleitor;
idade = 70;
eleitor= (idade<18) ? "Não eleitor":"Sim, eleitor";
resultado = !(idade === 65);
//resultado = (idade === 65 || idade === 72);
//resultado = (idade >= 60 && idade <= 70);
alert(resultado);*/
/*
function soma(valor1,valor2){
    return valor1 + valor2;
}

function realParaDolar (real, cotacaoDolar){
    return real * cotacaoDolar;
}
    var valorReal = 7.89;
    var cotacao = 5.08;

    var total = realParaDolar(valorReal, cotacao);

    alert("O valor em real é R$: "+ valorReal + " o valor em dolar U$ é: " + total +"");
    */
/*
    function alertaHello(){
        alert("Olá pessoal");
    }
*/
/*
    function paraCelsius(valorFahrenheit){
        return (5/9) * (valorFahrenheit - 32);
    }

    var X = paraCelsius (77);

    alert("A temperatura é de " + X + " graus Celsius");

    */

    const carro = {
        marca: "fiat",
        modelo: "punto",
        ano: 2003,
        matricula: "ABC-1234",
        buzina: function () { alert ('Biiiiiiiii')},
        completo: function() {
            return "A marca é "+this.marca+" e o modelo é "+this.modelo;
        }
    };

console.log(carro.completo());

/*
onclick => disparado quando recebe um click

ondblclick => disparado quando click duplo

onmouseover => disparado quando o mouse está sobre

onmouseout => disparado quando o mouse sai do objeto

onmousemove => disparado quando o mouse é movido no elemento

onmousedown => disparado quando o click do botão for pressionado

onmouseup = > disparado quando o click do mouse é solto

onfocus => disparado quando o elemento recebe o foco. Válido para input

onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"

onblur => disparado quando o elemento perde o foco

onkeydown => disparado quando uma tecla é pressionada 

onkeypress => disparado quando uma tecla é pressionada e solta

onkeyup => disparado quando uma tecla é solta sobre o elemento

onload => disparado quando a página terminou de ser carregada. Body

onresize => disparado quando há um redimencionamento da janela
*/

function eventoClick() {
    //alert('Acionou um evento de click');
    document.body.style.backgroundColor = "yellow";
}

function eventodblClick() {
    alert('Evento de click duplo');
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraVerde() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "green";
}

function mudou() {
    console.log('Mudou');
}

function teclaPressionada() {
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}