export default function StockPhoto({src, className='', children, position='center'}) {
  return (
    <div
      className={`stock-photo ${className}`}
      style={{backgroundImage:`url("${src}")`, backgroundPosition:position}}
    >
      {children}
    </div>
  );
}
