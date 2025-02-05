import ApolloProvider from "./providers/ApolloProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js + GraphQL",
  description: "Integrated Apollo Client with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider>{children}</ApolloProvider> {/* ApolloProvider Wrap */}
      </body>
    </html>
  );
}
