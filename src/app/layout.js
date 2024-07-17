import Header from "./componentes/Header"
import Footer from "./componentes/Footer"

export const metadata = {
  title: "NetPrime",
  description: "Site de filmes legais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
