export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: 'black', color: 'white' }}>
        {children}
      </body>
    </html>
  );
}
