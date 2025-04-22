// 10. Um usuário escolhe uma opção no menu (A, B ou outra). Mostre a ação correspondente.
let opcao = "C";

switch (opcao) {
  case "A":
    console.log("Você escolheu a opção de cadastro");
    break;
  case "B":
    console.log("Você escolheu a opção de login");
    break;
  case "C":
    console.log("Você escolheu a opção de alterar senha");
    break;
  default:
    console.log("Escolha uma opção válida");
    break;
}
