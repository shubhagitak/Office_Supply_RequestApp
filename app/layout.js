import './globals.css';

export const metadata = {
  title: 'Office Supply App',
  description: 'Simple office supply management app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
