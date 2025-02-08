
import { Poppins } from "next/font/google";
import "@/app/globals.css";


// Load the Google font
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include all weights
  style: ["normal", "italic"], // Include both normal and italic styles
  display: "swap", // Optional: Use font-display: swap for better performance
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  
  return (
    <html lang="en" className={`${poppins.className}`}>
      <head>
    <title>Your Page Title</title>
    
  </head>
      <body>  
            {children}
      </body>
    </html>
  );
};

export default RootLayout;
