// VIRTUAL COMPONENTS (JSON)
import product1 from "./img/home/product_syltherine.png";
import product2 from "./img/home/product_leviosa.png";
import product3 from "./img/home/product_lolito.png";
import product4 from "./img/home/product_respira.jpeg";
import product5 from "./img/home/product_grifo.png";
import product6 from "./img/home/product_muggo.png";
import product7 from "./img/home/product_pingky.jpeg";
import product8 from "./img/home/product_potty.jpeg";

export const PRODUCTS = [
  {
    id: 1,
    productName: "Syltherine",
    productDescription: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    tag: "-30%",
    productImage: product1,
  },
  {
    id: 2,
    productName: "Leviosa",
    productDescription: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 2500000,
    productImage: product2,
  },
  {
    id: 3,
    productName: "Lolito",
    productDescription: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    tag: "-50%",
    productImage: product3,
  },
  {
    id: 4,
    productName: "Respira",
    productDescription: "Outdoor bar table and stool",
    price: 500000,
    originalPrice: 500000,
    tag: "New",
    productImage: product4,
  },
  {
    id: 5,
    productName: "Grifo",
    productDescription: "Night lamp",
    price: 1500000,
    originalPrice: 1500000,
    productImage: product5,
  },
  {
    id: 6,
    productName: "Muggo",
    productDescription: "Small mug",
    price: 150000,
    originalPrice: 150000,
    tag: "New",
    productImage: product6,
  },
  {
    id: 7,
    productName: "Pingky",
    productDescription: "Cute bed set",
    price: 7000000,
    originalPrice: 14000000,
    tag: "-50%",
    productImage: product7,
  },
  {
    id: 8,
    productName: "Potty",
    productDescription: "Minimalist flower pot",
    price: 500000,
    originalPrice: 500000,
    tag: "New",
    productImage: product8,
  },
];

const loadImageDimensions = (product, imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      resolve({
        ...product,
        imageWidth: img.width,
        imageHeight: img.height,
      });
    };
  });
};

// Load image dimensions for each product
const loadProductsWithImageDimensions = async () => {
  const productsWithDimensions = await Promise.all(
    PRODUCTS.map(async (product) => {
      const updatedProduct = await loadImageDimensions(
        product,
        product.productImage
      );
      return updatedProduct;
    })
  );

  console.log(productsWithDimensions, "111"); // You can see the products with image dimensions here
};

loadProductsWithImageDimensions();
