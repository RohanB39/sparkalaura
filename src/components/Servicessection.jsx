import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductsPage1 from "./Products/ProductsPage1";
import ProductsPage2 from "./Products/ProductsPage2";


const Servicessection = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <ProductsPage1 products={products}/>
      <ProductsPage2 products={products}/>
    </>
  );
};

export default Servicessection;
