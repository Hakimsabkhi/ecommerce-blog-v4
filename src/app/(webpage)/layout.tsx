
import "@/app/globals.css";
import Header from "@/components/menu/Header";
import StoreProviders from "@/components/ProviderComp/StoreProvider";


const SubLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div >
      <StoreProviders>
        <Header />
        {children}
      </StoreProviders>
    </div>
  );
};

export default SubLayout;
