import React, { useEffect } from "react";
import Collection1 from "./Collection1/Collection1";
import Collection2 from "./Collection2/Collection2";
import Collection3 from "./Collection3/Collection3";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import ViewAllCollectionsHero from "./ViewAllCollectionsHero";

const ViewAllCollectionMain = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

  return (
    <div className="">
      <div>
        <ViewAllCollectionsHero />
      </div>
      <div>
        <Collection3 products={products}/>
      </div>
      <div>
        <Collection2 products={products}/>
      </div>
      <div>
        <Collection1 products={products}/>
      </div>
    </div>
  );
};

export default ViewAllCollectionMain;
