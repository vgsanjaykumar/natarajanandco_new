import { Link } from "react-router-dom";

const V = { primary: "btn-primary", dark: "btn-dark", outline: "btn-outline", ghost: "btn-ghost", glass: "btn-glass", wa: "btn-wa" };
const S = { md: "", lg: "btn-lg", sm: "btn-sm" };

// One button primitive: renders <Link>, <a> or <button> depending on props.
export default function Btn({ to, href, external, variant = "primary", size = "md", className = "", children, ...rest }) {
  const cls = `btn ${V[variant]} ${S[size]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return <button type="button" className={cls} {...rest}>{children}</button>;
}
