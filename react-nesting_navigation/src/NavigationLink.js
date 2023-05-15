export default function NavigationLink({ href, children }) {
  // renamed function-Name because of "rename Symbol" but since this is export default it could be ~any~ Name
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}
