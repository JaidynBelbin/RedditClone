import React from "react";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode; //👈 children prop typr
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
