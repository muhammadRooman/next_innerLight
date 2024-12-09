

import "../globals.css";
export default async function RootLayout({children}) {
  
  return (
    <html lang="en" dir="ltr">
      <body>
          {children}
      </body>
    </html>
  );
}
