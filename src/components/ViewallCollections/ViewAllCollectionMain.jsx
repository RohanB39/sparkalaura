import React, { useEffect } from "react";
import Collection1 from "./Collection1/Collection1";
import Collection2 from "./Collection2/Collection2";
import Collection3 from "./Collection3/Collection3";
import ViewAllCollectionsHero from "./ViewAllCollectionsHero";
import SmallNav from "../SmallNav";
import { Navbar } from "@material-tailwind/react";

const ViewAllCollectionMain = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="">
      <div>
        <ViewAllCollectionsHero />
      </div>
      <div>
        <Collection3 />
      </div>
      <hr className="bg-yellow-100 h-1 rounded-full shadow-md border-none" />
      <div>
        <Collection2 />
      </div>
      <hr className="bg-blue-200 h-1 rounded-full shadow-md border-none" />
      <div>
        <Collection1 />
      </div>
    </div>
  );
};

export default ViewAllCollectionMain;
