export interface itemsList {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image?: string;
}

export const getItems = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  ).then((r) => r.json());

  return response;
};
