import multistepformImg from "./assets/images/desktop-design-step-1.jpg";
import ecommerceImg from "./assets/images/e-commerce.png";
import restcountriesImg from "./assets/images/rest-countries.png";
import todoAppImage from "./assets/images/desktop-design-light.jpg";

export const links = [
  {
    id: 1,
    label: "home",
  },
  {
    id: 2,
    label: "about",
  },
  {
    id: 3,
    label: "projects",
  },
  {
    id: 4,
    label: "contact",
  },
];

export const projects = [
  {
    id: 1,
    img: todoAppImage,
    title: "Todo App",
    description:
      "In this project, user can add new todos to the list, mark todos as complete, delete todos from the list, clear all completed todos.",
    stack: ["react", "react-router", "scss"],
    live: "https://jamvika-todo.netlify.app/",
    repo: "https://github.com/jamvika/kb-todo",
  },

  {
    id: 2,
    img: multistepformImg,
    title: "multi step form",
    description:
      "In this component, users complete each step of the sequence. Users can go back to a previous step to update their selections and also view a summary of their selections on the final step before confirming their order.",
    stack: ["html", "css", "javascript",],
    live: "https://jamvika-multi-step-form.netlify.app/",
    repo: "https://github.com/jamvika/multi-step-form-main",
  },
  {
    id: 3,
    img: ecommerceImg,
    title: "e-commerce product page",
    description:
      "A product page where users can view the product in a lightbox gallery, switch the large product image by clicking on the small thumbnail images, add items to the cart, view the cart, and remove items from it.",
    stack: ["html", "css", "javascript", "react", "tailwind"],
    live: "https://jamvika-e-commerce-product.netlify.app/",
    repo: "https://github.com/jamvika/e-commerce-product-page-kb",
  },
  {
    id: 4,
    img: restcountriesImg,
    title: "REST countries",
    description:
      "In this project, users can view all countries, filter them by region, and access detailed information about each country.",
    stack: ["html", "css", "javascript", "api"],
    live: "https://jamvika-rest-countries-api.netlify.app/",
    repo: "https://github.com/jamvika/rest-countries-api",
  },
];
