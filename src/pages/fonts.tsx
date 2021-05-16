export const FontsLoader = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        media="print"
      />

      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </noscript>
    </>
  )
}
