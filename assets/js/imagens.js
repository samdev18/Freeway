// imagens do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemPath = "assets/imagens";
let somPath = "assets/sons";

function preload() {
  imagemDaEstrada = loadImage(`${imagemPath}/estrada.png`);
  imagemDoAtor = loadImage(`${imagemPath}/ator-1.png`);
  imagemCarro = loadImage(`${imagemPath}/carro-1.png`);
  imagemCarro2 = loadImage(`${imagemPath}/carro-2.png`);
  imagemCarro3 = loadImage(`${imagemPath}/carro-3.png`);
  imagemCarros = [
    imagemCarro, imagemCarro2, imagemCarro3,
    imagemCarro, imagemCarro2, imagemCarro3
  ];
  somDaTrilha = loadSound(`${somPath}/trilha.mp3`);
  somDaColisao = loadSound(`${somPath}/colidiu.mp3`)
  somDoPonto = loadSound(`${somPath}/pontos.wav`);
}
