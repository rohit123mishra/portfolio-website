import { Providers } from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./RootLayout.module.css"; // Import CSS module for styling

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Providers>
          <div className={styles.wrapper}>
            <Header />
            <main className={styles.content}>{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
