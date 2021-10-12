const chessPiece = "Torre";

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei = Qualquer direção mas apenas uma casa por vez');
    break;
  case 'bispo':
    console.log('Bispo = Diagonal');
  case 'rainha':
    console.log('Rainha = Diagonal,horizontal e vertical');
    break;
  case 'cavalo':
    console.log('Cavalo = "L" pode pular sobre as peças');
    break;
  case 'torre':
    console.log('Torre = Horizontal e vertical');
    break;
  case 'peão':
    console.log('Peão = Apenas uma casa para frente, no primeiro movimento podem ser duas casas');
    break;
  default:
    console.log('Peça inválida');
    break;
};