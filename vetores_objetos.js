const programador = {
  nome: "Tiago",
  idade: 37,
  tecnologias: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "Javascript", especialidade: "Web/Mobile" },
  ],
};

console.log(
  `O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[1].nome} com especialidade em ${programador.tecnologias[1].especialidade}`
);
