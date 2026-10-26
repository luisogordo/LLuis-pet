console.log("Deu certo!")


async function imagemApi(){
    let respostaApi = await fetch('https://dog.ceo/api/breeds/image/random')
    let dadosApi = await respostaApi.json();
    document.querySelector(".img-dog").src= dadosApi.message
    console.log(respostaApi);
}
imagemApi()



function Whatsapp(){

const texto ="Olá! Vim pelo site do Petsky e gostaria de agendar um horário para o meu pet."
const textoFormatado =encodeURIComponent(texto)
const url =  "https://wa.me/5544999204861?text=I" + textoFormatado;
open(url,'_blank');
console.log(url);
}