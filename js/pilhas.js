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

//informando se a pilha stá vazia ou não após esvaziar ela; (this.isEmpty);
console.log(novaPilha.isEmpty());

//informando o tamanho da pilha após esvaziar ela; (this.size);
console.log(novaPilha.size()); 










