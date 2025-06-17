export const metadata = {
  title: 'Prompt Forge',
  description: 'App builder from natural language',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
