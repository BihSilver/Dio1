function calcularNivel(vitorias, derrotas) {
    if (vitorias < 0 || derrotas < 0) 
        return "Valores de vitórias e derrotas devem ser não negativos.";
    let saldo = vitorias - derrotas;
    let nivel = "";
    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário";
    } else if (saldo >= 101) {
        nivel = "Imortal";
    }
    return "O Herói tem um saldo de " + saldo + " e está no nível " + nivel;
}

let nome = "Bianca";
let vitorias = 15;
let derrotas = 5;
let nivel = calcularNivel(vitorias, derrotas);

console.log("O jogador " + nome + " tem o seguinte resultado: " + nivel);