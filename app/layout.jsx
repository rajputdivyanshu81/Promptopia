import '@/styles/global.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import { ClerkProvider } from "@clerk/nextjs";
import {dark} from "@clerk/themes";
export const metadata = {
  title: 'Promptopia',
  description: 'Discover & share AI prompts',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ClerkProvider appearance= {{baseTheme: dark}}>
          <Provider>
            <div className="main">
              <div className="gradient"></div>
            </div>
            <main className="app">
              <Nav />
              {children}
            </main>
          </Provider>
        </ClerkProvider>
      </body>
    </html>
  );
};

export default RootLayout;
