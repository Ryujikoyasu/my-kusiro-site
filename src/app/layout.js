import './globals.css';

export const metadata = {
  title: 'くしろまちづくり研究所',
  description: 'わくわくする未来を釧路につくる',
  robots: 'noindex, nofollow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
