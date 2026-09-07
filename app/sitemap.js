export default function sitemap(){
  const base=process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const routes=['','/about','/portfolio','/services','/albums','/packages','/wedding-photography','/wedding-photographer-salem','/wedding-photographer-dharmapuri','/wedding-photographer-krishnagiri','/wedding-photographer-vellore','/wedding-photographer-ambur','/pre-wedding','/films','/portraits','/contact','/privacy','/terms'];
  return routes.map(route=>({
    url:`${base}${route}`,
    lastModified:new Date(),
    changeFrequency:route===''?'weekly':'monthly',
    priority:route===''?1:route==='/contact'?0.9:route==='/privacy'||route==='/terms'?0.3:0.8
  }));
}