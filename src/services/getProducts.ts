import type { Product } from "../types/TypeProduct";

const URL = "/api/lista-produtos/produtos.json";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }

    const data = await response.json();

    return data.products;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};
