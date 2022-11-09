console.log("--- PILHAS ---");

//"O último a entrar é o primeiro a sair - LIFO (Last In First Out)"

function pilha() {

    var items = [];

    this.push = function(element) {
        //adiciona um novo item a pilha.
        items.push(element);
    };

    this.pop = function() {
        //remove o item do topo da pilha. 
        return items.pop();
    };

    this.peek = function() {
        //devolve o elemento que está no topo da pilha.
        return items[items.length - 1];
    };

    this.isEmpty = function() {
        //informa se a pilha está vazia ou não.
        return items.length === 0;
    };

    this.clear = function() {
        //limpa a pilha.
        items = [];
    };

    this.size = function() {
        //informa o tamanho da pilha.
        return items.length;
    };

    this.print = function() {
        //imprime a pilha no console.
        console.log(items.toString());
    };
}

//TESTANDO A PILHA CRIADA;

var novaPilha = new pilha();

//adicionando elementos a pilha; (this.push);
novaPilha.push(2);
novaPilha.push(4);
novaPilha.push(6);
novaPilha.push(8);
novaPilha.push(10);

//retornando o elemento do topo da pilha; (this.peek);
console.log(novaPilha.peek());

//removendo o item do topo da pilha; (this.pop);
novaPilha.pop();

//retornando o elemento do topo da pilha após remover o elemento do topo da pilha.
console.log(novaPilha.peek());

//informando se a pilha stá vazia ou não; (this.isEmpty);
console.log(novaPilha.isEmpty());

//informando o tamanho da pilha; (this.size);
console.log(novaPilha.size()); 

//imprimindo a pilha no console; (this.print);
novaPilha.print();

//esvaziando pilha; (this.clear);
novaPilha.clear();

//informando se a pilha está vazia ou não após esvaziar ela; (this.isEmpty);
console.log(novaPilha.isEmpty());

//informando o tamanho da pilha após esvaziar ela; (this.size);
console.log(novaPilha.size()); 

// ANALISANDO GRAFICAMENTE AS PILHAS
console.log(novaPilha.isEmpty())
novaPilha.push(5)
novaPilha.print()
novaPilha.push(8)
novaPilha.print()
novaPilha.push(11)
novaPilha.print()
novaPilha.push(15)
novaPilha.print()

novaPilha.pop()
novaPilha.print()
novaPilha.pop()
novaPilha.print()
novaPilha.pop()
novaPilha.print()
novaPilha.pop()
novaPilha.print()
novaPilha.pop()
novaPilha.print()
console.log(novaPilha.isEmpty())

//PRIMEIRO EXERCÍCIO
console.log("PRIMEIRA ATIVIDADE");
console.log("1- Conversor Binário");

function dec2Bin(decNumber){
    //declarando variáveis necessárias;
    var restStack = [],
    rest,
    binaryString = ''

    //Transformando numero em binário;
    while(decNumber > 0){

        rest = Math.floor(decNumber % 2);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / 2);

    }
    
    //Colocando o número binário em ordem; 
    while(restStack.length > 0){

        binaryString += restStack.pop().toString();

        //p.s: a função .pop() tem a funcionalidade de retirar o elemento do topo da pilha, mas também retorna o valor retirado se necessário.

    }

    return binaryString;
}

console.log("25 = ", dec2Bin(25));
console.log("23 = ", dec2Bin(23));






