import Image from 'next/image';

export default function BrandLogo({compact=false}){
  return <span className={`brand-logo ${compact?'brand-logo--compact':''}`}>
    <span className="brand-logo-image"><Image src="/sri-rajan-logo.png" alt="Sri Rajan Photography logo" fill sizes="72px" priority/></span>
    <span className="brand-copy"><strong>SRI RAJAN</strong><small>PHOTOGRAPHY</small></span>
  </span>;
}
