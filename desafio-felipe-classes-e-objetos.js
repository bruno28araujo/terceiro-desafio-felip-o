class heroi {
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
        if (this.tipo === "mago"){
            this.ataque = "Magia"
            return this.escrever()
        }else if (this.tipo === "guerreiro"){
            this.ataque = "Espada"
            return this.escrever()
        }else if (this.tipo === "monge"){
            this.ataque = "Artes Marciais"
            return this.escrever()
        }else if (this.tipo === "ninja"){
            this.ataque = "Shuriken"
            return this.escrever()
        }else{
            console.log(`Não ha ataque para o tipo: ${this.tipo}`)
        }

    }

    escrever(){
        console.log(`O nome do heroi é ${this.nome} tem ${this.idade} anos e é do tipo ${this.tipo} e atacou usando ${this.ataque}.`)
    }
    
}

let novoHeroi = new heroi("Novo Heroi", 20, "monge")

novoHeroi.atacar()

