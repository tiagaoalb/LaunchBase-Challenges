const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = altura ** 2 / peso;

if (imc >= 30) {
  console.log(nome + "você está acima do peso");
} else if (imc <= 29.9) {
  console.log(nome + " você não está acima do peso");
}
