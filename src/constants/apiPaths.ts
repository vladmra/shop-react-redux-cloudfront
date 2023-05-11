const productsServiceUrl = import.meta.env.VITE_PRODUCTS_SERVICE_URL;
const importServiceUrl = import.meta.env.VITE_IMPORT_SERVICE_URL;

const API_PATHS = {
  product: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: importServiceUrl,
  bff: productsServiceUrl,
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

export default API_PATHS;
