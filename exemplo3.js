class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome 
        this.idade = idade 
        this.altura = altura 
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos de idade e tenho ${this.altura} de altura.`);
        
    }
}


const user = new Pessoa ("Flavia", 16, 1.63)
const user1 = new Pessoa ("Ana Ju", 16, 1.61)

user.seApresentar()

console.log(user1);
