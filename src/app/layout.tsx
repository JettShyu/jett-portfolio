import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Jett Portfolio',
  description: 'DevOps Engineer Portfolio | CI/CD, Docker, Infra as Code',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <nav className="w-full bg-gray-900 border-b border-gray-700 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-500">
              Jett.dev
            </Link>
            <div className="flex space-x-6 text-sm">
              <Link href="/" className="hover:text-blue-400">Home</Link>
              <Link href="/projects" className="hover:text-blue-400">Projects</Link>
              <Link href="/resume" className="hover:text-blue-400">Resume</Link>
              <Link href="/contact" className="hover:text-blue-400">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="pt-10">{children}</main>
      </body>
    </html>
  );
}
