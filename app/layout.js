import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang=\"ru\" className=\"bg-darkBg text-white font-sans overflow-x-hidden\">
      <head>
        <meta charset="utf-8" />
        <title>CS_Freedome v2</title>
        <link rel="icon" href="/logo.svg"~
      </head>
      <body className=\"min-h-screen bg-darkBg text-white flex flex-col overflow-x-hidden\">
        {children}
      </body>
    </html>
  );
}