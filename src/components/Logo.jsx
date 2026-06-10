import logoImage from '../assets/nuda-logo-transparent.png';

export function Logo({ className = '' }) {
  return (
    <img
      className={`block h-12 w-auto ${className}`}
      src={logoImage}
      alt=""
      aria-hidden="true"
    />
  );
}
