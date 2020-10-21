let pecaDeXadrez = 'torre';

switch (pecaDeXadrez.toLowerCase()) {
  case 'rei':
  console.log("O rei pode se mover para qualquer casa adjacente.");
  break;
  case 'bispo':
    console.log("O bispo pode se mover diagonal");
    break
    case 'rainha':
      console.log("Rainha pode se mover diagonal e horizontal");
      break;
      case 'cavalo':
        console.log("O cavalo pode pular sobre as peças");
        break;
          case 'torre':
             console.log("A torre pode se mover para horizontal");
             break;
          case 'peão':   
            console.log("O peão pode se mover apenas uma casa para frente");
            break;
            default:
              console.log("Erro, peça inválida!");
              break;
}
