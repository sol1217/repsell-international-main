import { Metadata } from "next";
import Admin from "@/components/Admin/Admin";

export const metadata: Metadata = {
  title: "Perfil Administrativo Repsell",
  description: "Agregar productos, Nuevos Blogs, Soporte",
};

const AdminPage = () => {
  return (
    <>
      <Admin />
    </>
  );
};

export default Admin;
