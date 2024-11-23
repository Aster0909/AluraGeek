//pasta main.js

import { fetchProduct } from "../service/product-service.js";

const productConteiner = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");


//Manipulando o DOM
function createCard({nome, price, image, id}){
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="imag-conteiner">
          <img src="${image}" alt="imagem produto">
        </div>
        <div class="card-conteiner--info">
          <p>${nome}</p>
          <div class="card-conteiner--value">
            <p>${price}</p>
            <button class="delete-button" data-id="${id}">
                <img src="./img/excluir.png" alt="excluir">
            </button>
          </div>
        </div>
    `;
    return  card;
};
console.log(listProducts);


const renderProducts = async() =>{
  try{
     const listProducts = await  await fetchProduct();
     if (!listProducts || listProducts.length === 0) {
        return listProducts;
     }
     listProducts.forEach((product) =>{
      const productCard = createCard(product);
      productConteiner.appendChild(productCard);
     });
  }catch (error){
    console.log(error);

  };
};

renderProducts();


//botao enviar//
const enviarCard = (event) => {
  event.preventDefault(); 
  buton =document.querySelector("button");

  const nome = document.querySelector("[data-nome]").value;
  const price = document.querySelector("[data-price]").value;
  const image = document.querySelector("[data-image]").value;

  if (nome && price && image) {
      const novoCard = createCard({ nome, price, image, id: Date.now() });
      document.querySelector("[data-product]").appendChild(novoCard);
      alert("Novo card adicionado com sucesso!");
  } else {
      alert("Preencha todos os campos!");
  }
};


const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Habilita CORS para todas as rotas

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/api', createProxyMiddleware({
  target: 'https://673bd62396b8dcd5f3f7a1d2.mockapi.io',
  changeOrigin: true,
}));
