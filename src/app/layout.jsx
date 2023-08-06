import Header from "./components/Header";
import Tabs from "./components/Tabs";
import "./globals.css";
import Head from "./head";
import Providers from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Providers>
          <Header />
          <Tabs/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
