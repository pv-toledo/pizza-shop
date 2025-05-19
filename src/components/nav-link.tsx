import { Link, useLocation, type LinkProps } from "react-router-dom";

export type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation(); //Hook que retorna qual é a rota atual
  return (
    <Link //para deixar em negrito a página atual
      data-current={pathname === props.to}
      className="text-muted-foreground hover:text-foreground data-[current=true]:text-foreground flex items-center gap-1.5 text-sm font-medium"
      {...props}
    />
  );
}
