import { Outlet } from "react-router-dom";
import HeaderAdmin from "../admin_components/HeaderAdmin";

export default function AdminDefaultLayout() {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
    </>
  );
}
