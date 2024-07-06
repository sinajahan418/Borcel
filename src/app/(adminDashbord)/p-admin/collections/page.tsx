import CollectionForm from "@/components/template/p-admin/collectionForm/CollectionForm";
import CollectionNav from "@/components/template/p-admin/collectionForm/CollectionNav";
import NewCollection from "@/components/template/p-admin/collectionForm/NewCollection";
import React from "react";

const page = () => {

  return (
    <div>
      <CollectionNav />
      <NewCollection  />
    </div>
  );
};

export default page;
