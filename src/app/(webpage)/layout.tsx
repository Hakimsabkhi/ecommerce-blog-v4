import React, { ReactNode } from "react";
import Header from "@/components/menu/Header";
import StoreProviders from "@/components/ProviderComp/StoreProvider";
import Footer from "@/components/menu/Footer";

interface SubLayoutProps {
  children: ReactNode;
}

const SubLayout = ({ children }: SubLayoutProps) => {
  return (
    <StoreProviders>
      <Header />
      {children}
      <Footer />
    </StoreProviders>
  );
};

export default SubLayout;
