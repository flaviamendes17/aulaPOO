class Pizza {
    constructor(base,molho,cobertura,queijo ){
        this.base = base
        this.molho = molho
        this.cobertura = cobertura
        this.queijo = queijo
    }
    mostrarIngredientes (){
        console.log(`Olá, sua pizza será de massa ${this.base}, ao molho de ${this.molho}, com cobertura ${this.cobertura} e ${this.queijo}`);
        
    }
}

const user = new Pizza ("Grossa", "molho de tomate", "meio frango e meio bacon", "queijo")
user.mostrarIngredientes()
console.log(user)