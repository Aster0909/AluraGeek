
const BASE_URL = "https://673bd62396b8dcd5f3f7a1d2.mockapi.io/products";


// Buscar dados da API
const fetchProduct = async () => {
    try {
      const response = await fetch(BASE_URL);
      const products = await response.json();
  
      const productContainer = document.querySelector("[data-product]");
  
      // Verifica se o container existe no HTML
      if (!productContainer) {
        console.error("Elemento [data-product] não encontrado no HTML.");
        return;
      }
  
      // Renderiza os produtos
      products.forEach((product) => {
        const productCard = createCard(product);
        productContainer.appendChild(productCard);
      });
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
};


const createProduct = async (nome,price, image) => {
    try{
       const response = await fetch(BASE_URL,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, price, image }),
       });
       const data = await response.json();
       return data;
    }catch (error){
     console.log("Error", error)

    }
};



fetchProduct();

export const servicesProducts = {
    createProduct,

}