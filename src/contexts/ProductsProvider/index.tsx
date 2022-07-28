import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../../services/api";

interface ProviderProps {
  children: ReactNode;
}

interface ProductProps {
  title: string;
  name: string;
  images: string;
  local: string;
  price: number;
  description: string;
  category: string;
  id: number;
}

interface ContextProps {
  products: ProductProps[];
  filterproducts: ProductProps[];
  addProduct: (arr: ProductProps[]) => void;
  addFilterProduct: (arr: ProductProps[]) => void;
  refresh: () => void;
}

const ProductContext = createContext<ContextProps>({} as ContextProps);

export const ProductProvider = ({ children }: ProviderProps) => {
  const addFilterProduct = (arr: ProductProps[]) => {
    setFilterProduct(arr);
  };
  const addProduct = (arr: ProductProps[]) => {
    setProduct(arr);
    localStorage.setItem("@Product", JSON.stringify(arr));
  };


  const [products, setProduct] = useState<ProductProps[]>(
    JSON.parse(localStorage.getItem("@Product") || "null") || []
  );
  const [filterproducts, setFilterProduct] = useState<ProductProps[]>(
    JSON.parse(localStorage.getItem("@Product") || "null") || []
  );

  const refresh = () => {
    api.get("/products").then((res) => {
      addFilterProduct(res.data);
      addProduct(res.data);
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filterproducts,
        addFilterProduct,
        refresh,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
