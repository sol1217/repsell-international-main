"use client";
import { Suspense, useEffect, useState } from "react";
import EditProducts from "@/components/productos/EditProducts/page";

const EditProductsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditProducts />
    </Suspense>
  );
};

export default EditProductsPage;
