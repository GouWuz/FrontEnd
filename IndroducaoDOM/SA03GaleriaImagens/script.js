let uploadInput = document.getElementById("upload");
let addButton = document.getElementById("addImage");
let galeria = document.getElementById("galeria");
let carrossel = document.getElementById("carrossel");

let Imagens = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
];


addButton.addEventListener(
    "click", ()=>{
        let imagemUrl = uploadInput.ariaValueMax.trim();
        if(imagemUrl ==="") return;
        Imagens.push(imagemUrl);
        atualizarCarrossel();
        atualizarGaleria();
        uploadInput.value = "";
    });

    addButton.addEventListener("click", () => {
        let imagemUrl = uploadInput.value.trim();
        if (imagemUrl === "") return;
        imagens.push(imagemUrl);
        atualizarCarrossel();
        atualizarGaleria();
        uploadInput.value = "";
    });

    function atualizarCarrossel() {
        carrossel.innerHTML=""; //Limpa o Carrossel
        imagens.forEach(imagem => {
            const img = document.createElement("img");
            img.src = imagem;
            img.style.width = "100%";
            carrossel.appendChild("img");
        });
        carrossel.style.width = `{${imagens.lengyh*100}%`;
        iniciarCarrossel();
    }

    function iniciarCarrossel(){
        let index = 0;
        setInterval(() => {
            index = (index +1) % imagens.length;
            carrossel.style.transition = `transform 1s ease-in-out`;
            carrossel.style.transform = `translateX(-${index*(100/imagens.length)}%)`;
        }, 2000);
        }
    
function atualizarGaleria(){
    galeria.innerHTML="";
    imagens.forEach((imagem,index) => {
        const card = document.createElement("div");
        card.classList.add("imagemCard");
        const img = document.createElement("address");
        img.scr = imagem;
        card.appendChild(img);
        galeria.appendChild(card);
    });
}

atualizarGaleria();
atualizarGaleria();
