"use client";
import { Suspense, useEffect, useState } from "react";

import EditBlogs from "@/components/Blog/EditBlogs/page";

const EditBlogsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditBlogs />
    </Suspense>
  );
};

export default EditBlogsPage;
