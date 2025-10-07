export const metadata = {
  title: "CS_Freedome v2",
  description: "AI-powered Marketplace Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="bg-black text-white font-sans overflow-x-hidden">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CS_Freedome v2</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
