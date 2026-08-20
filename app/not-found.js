import Link from 'next/link';
import BrandLogo from '../components/BrandLogo';

export default function NotFound(){
  return <main className="not-found">
    <div className="not-found-logo"><BrandLogo/></div>
    <p className="eyebrow">404 · FRAME NOT FOUND</p>
    <h1>This story<br/><em>isn’t here.</em></h1>
    <p>The page may have moved, or the link may no longer exist.</p>
    <Link href="/" className="button button--light">Return home</Link>
  </main>
}