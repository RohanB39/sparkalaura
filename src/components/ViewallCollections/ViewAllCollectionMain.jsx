import React from "react";
import Collection1 from "./Collection1/Collection1";
import Collection2 from "./Collection2/Collection2";
import Collection3 from "./Collection3/Collection3";
import ViewAllCollectionsHero from "./ViewAllCollectionsHero";

const ViewAllCollectionMain = () => {

  return (
    <div className="">
      <div>
        <ViewAllCollectionsHero />
      </div>
      <div>
        <Collection3 />
      </div>
      <div>
        <Collection2 />
      </div>
      <div>
        <Collection1 />
      </div>
    </div>
  );
};

export default ViewAllCollectionMain;
