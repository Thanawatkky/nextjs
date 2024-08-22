import { ThemeProvider } from "@mui/material";
// import { AppRouterCacheProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import theme from "../theme";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          <h2>Main Website Layout</h2>
          {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
