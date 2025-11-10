
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h1>iner Layout item</h1>
        {children}
    </>
  )
}
