// EXERCÍCIO 1

let data = {
    Name: "David",
    Age: 28,
    Team: "Flamengo"
}
console.log(data)


// EXERCÍCIO 2

data.nationality = "Brasileira"
console.log(data)


// EXERCÍCIO 3

delete data.nationality
console.log(data)


// EXERCÍCIO 4

console.log(data)


// EXERCÍCIO 5

let information = [
    {
        Nome: "Maria",
        Idade: 25,
        Telefone: +55219987654321,
        Amigos: ["Leo", "Rômulo", "Júlia", "Mario"]
    },
    {
        Nome: "Matheus",
        Idade: 30,
        Telefone: +55219987654322,
        Amigos: ["Rafael", "Maicon", "Flavisson", "David"]
    },
    {
        Nome: "Victor",
        Idade: 33,
        Telefone: +55219987654323,
        Amigos: ["Thiago", "Marcelo", "Pedro", "Juliana"]
    },
    {
        Nome: "Luis",
        Idade: 25,
        Telefone: +55219987654324,
        Amigos: ["Fernanda", "Mariana", "Igor", "Rodrigo"]
    },
    {
        Nome: "Ricardo",
        Idade: 20,
        Telefone: +55219987654325,
        Amigos: ["Jonathan", "Fernando", "Felipe", "Eduarda"]
    }
]
console.log(information)


// EXERCÍCIO 6

console.log(information[0].Amigos[0]);
console.log(information[1].Amigos[0]);
console.log(information[2].Amigos[0]);
console.log(information[3].Amigos[0]);
console.log(information[4].Amigos[0]);