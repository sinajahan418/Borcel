import { LuLayoutDashboard } from "react-icons/lu";
import { RiShapesLine } from "react-icons/ri";
import { GoTag } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { IconType } from "react-icons";
import { ReactElement } from "react";

export interface Links{
    url: string
    icon: ReactElement
    label:string
}
  
  export const navLinks : Links[] = [
    {
      url: "/p-admin",
      icon: <LuLayoutDashboard />,
      label: "Dashboard",
    },
    {
      url: "/p-admin/collections",
      icon: <RiShapesLine />,
      label: "Collections",
    },
    {
      url: "/p-admin/products",
      icon: <GoTag />,
      label: "Products",
    },
    {
      url: "/p-admin/orders",
      icon: <LuShoppingBag />,
      label: "Orders",
    },
    {
      url: "/p-admin/customers",
      icon: <FaUsers />,
      label: "Customers",
    },
  ];