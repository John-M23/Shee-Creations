import product1 from "../assets/Images/Products/Crotchet1.png";
import product2 from "../assets/images/products/product2.png";
import product3 from "../assets/images/products/product3.png";
import product4 from "../assets/Images/Products/product4.png";
import product5 from "../assets/images/products/product5.png";
import product6 from "../assets/images/products/product6.png";
import product7 from "../assets/images/products/product7.png";






const productsData = [
  {
    id: 1,
    name: "Crochet Pink Top",
    image: product1,
    description: "Handmade crochet top.",
    prize: 2000,
    sizes: { XL: 2000, XXL: 2000, XXXL: 2000 },
  },
  {
    id: 2,
    name: "Crochet Hat",
    image: product2,
    description: "Warm crochet hat. <br/> 1800",
    prize: 1800,
    sizes: { Toddler: 1200, Adult: 1800 },
  },
  {
    id: 3,
    name: "Crochet Bag",
    image: product3,
    description: "Stylish handmade bag.",
    sizes: { "One Size": 3500 },
  },
  {
    id: 4,
    name: "Crochet Scarf",
    image: product4,
    description: "Cozy crochet scarf.",
    sizes: { S: 1500, M: 2000, L: 2500 }, 
  },

  {
     id: 5,
    name: "Crochet Dress",
    image: product5,
    description: "Elegant crochet dress.",
    sizes: { S: 5000, M: 6000, L: 7000 },
  }  ,
  { 
  id: 6,
    name: "Crochet Sweater",
    image: product6,
    description: "Warm crochet sweater.",
    sizes: { S: 4000, M: 5000, L: 6000 },   
},

{
  id: 7,
    name: "Crochet Cardigan",
    image: product7,
    description: "Stylish crochet cardigan.",
    sizes: { S: 4500, M: 5500, L: 6500 },
  }

  // {
  //   id: 8,
  //   name: "Crochet Blanket",
  //   image: product8,
  //   description: "Cozy crochet blanket.",
  //   sizes: { "One Size": 8000 },
  // }
];

export default productsData;