import AllProducts from '@/components/template/p-admin/products/allProducts';
import ProductNav from '@/components/template/p-admin/products/ProductNav';
import React from 'react';

const page = () => {
  return (
    <div>
       <ProductNav />
       <AllProducts />
    </div>
  );
}

export default page;
