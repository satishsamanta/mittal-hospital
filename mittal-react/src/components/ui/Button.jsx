import { Link } from 'react-router-dom';

const VARIANTS = {
  primary: 'btn btn-primary',
  outline: 'btn btn-outline',
  glass: 'btn btn-glass',
  emergency: 'btn btn-emergency',
  ghost: 'btn text-primary-600 hover:bg-primary-50',
};
const SIZES = { sm: 'btn-sm', md: '', lg: 'btn-lg' };

export function Button({ variant = 'primary', size = 'md', as, to, href, icon, className = '', children, ...rest }) {
  const cls = `${VARIANTS[variant]} ${SIZES[size]} ${className}`.trim();
  const inner = (
    <>
      {icon && <i className={`fa-solid ${icon}`} aria-hidden="true"></i>}
      <span>{children}</span>
    </>
  );
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button className={cls} {...rest}>{inner}</button>;
}
