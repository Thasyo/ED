console.log("--- INTRODUÇÃO AO ARRAY ---")

var avgTemp = []

avgTemp[0] = 31.9
avgTemp[1] = 35.5
avgTemp[2] = 42
avgTemp[3] = 38
avgTemp[4] = 25.5

console.log(avgTemp[4]) 

console.log(typeof avgTemp)


console.log("--- CRIANDO E INCIALIZANDO ARRAYS ---")

var daysOfWeek = new Array();

daysOfWeek[0] = 'Sunday';

console.log(daysOfWeek[0]);

var daysOfWeek = new Array(7);

console.log(daysOfWeek.length) //"variavel.lenght" mostra o tamanho total da variavel;

daysOfWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

console.log(daysOfWeek[4]); //Acessando uma posição do Array; 


console.log("--- ACESSANDO ELEMENTOS ATRAVÉS DA ITERAÇÃO ---")

 //EXEMPLO 01
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for(i = 0; i < daysOfWeek.length; i ++) {
    console.log(daysOfWeek[i]);
} 

//EXEMPLO 02

var fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for(var i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci);

//TAMBÉM PODEMOS FAZER DESSA FORMA;

for(var i = 0; i < fibonacci.length; i++){
    console.log(fibonacci[i]);
}


console.log("--- INSERINDO ELEMENTOS NO ARRAY ---")

 var numbers = [0, 1, 2, 3, 4, 5];

//Inserindo elementos no final do array;
numbers.push(6);
numbers.push(7);
numbers.push(8);
numbers.push(9);
numbers.push(10);  
numbers.push(11); 
numbers.push(12);  
numbers.push(13);  
numbers.push(14); 
numbers.push(15);//foi substituida  

//Inserindo elementos no inicio do array;

numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3);
numbers.unshift(-4);
numbers.unshift(-5); //foi substituida

numbers[0] = "inicio"; //Dessa forma, ele nao insere elementos, ele sobrescreve o elemento na posição indicada;
numbers[19] = "final";

console.log("--- REMOVENDO ELEMENTOS NO ARRAY ---");

//Removendo elementos no final do array;
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();

//Removendo elementos no inicio do array;
numbers.shift();
numbers.shift();
numbers.shift();
numbers.shift();
numbers.shift();

//*Para remover elementos, não precisa inserir valor nas funções.*

console.log('--- INSERINDO EM UMA POSIÇÃO ESPECÍFICA ---');

//o "var.splice()" vai tirar uma fatia do array;
numbers.splice(3, 3); //A partir da 3° posição, vai fatiar 3 elementos; ou seja (3, 3); Ao fatiar elementos, existe uma quantidade predeterminada;

//o "var.splice()" também pode inserir elementos;
numbers.splice(3, 0, 3, 4, 5, "inserindo a mais", "e um pouco mais"); // a partir da 3° posição, não fatiar nenhuma elemento, mas inserir esse esse e esse; ou seja, (3, 0, 3, 4, 5, "inserindo a mais", "e um pouco mais");                                                                     //Ou seja, ao inserir elementos com o splice, não existe uma quantidade predeterminada para inserir elementos.                                                                                                                        

console.log(numbers); 


console.log("--- ARRAYS BIDIMENSIONAIS ---");

var avgTempWeek = [];

var avgTempWeek1 = [10, 24.3, 44.6, 65.7, -13.6, 10.5, 33];
var avgTempWeek2 = [8.6, 20, 43.8, 60.1, 14.6, 11.2, 35];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

console.log(avgTempWeek);

console.log("--- Acessando valor específico no array bidimensional (matrizes bidimensionais) ---");
console.log(avgTempWeek[0][4]); 

console.log("--- Percorrendo todo o array bidimensional --")
for(var i = 0; i < avgTempWeek.length; i++) {
    for(var j = 0; j < avgTempWeek[i].length; j++) {
        console.log(avgTempWeek[i][j]);
    };
};

console.log("--- ARRAYS TRIDIMENSIONAIS ---");

var month = [];

var avgTempWeek1 = [10, 24.3, 44.6, 65.7, -13.6, 10.5, 33];
var avgTempWeek2 = [8.6, 20, 43.8, 60.1, 14.6, 11.2, 35];

var avgTempWeek3 = [5, -27.2, 14.9, 55.4, -11, 9.5, 37];
var avgTempWeek4 = [2.6, 20.2, 41.1, -44.6, 19, 13.2, -60];

var firstWeeks = [avgTempWeek1, avgTempWeek2];
var lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

console.log(month);

console.log("--- Acessando valor específico no array tridimensional (matrizes tridimensionais) ---");
console.log(month[1][0][1]);

console.log("--- Percorrendo todo o array tridimensional ---");

for(var i = 0; i < month.length; i++) {
    for(var j = 0; j < month[i].length; j++) {
        for(var k = 0; k < month[i][j].length; k++){
            console.log(month[i][j][k]);
        };
    };
};




