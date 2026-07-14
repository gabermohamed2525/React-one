import { NavLink } from "react-router-dom";
type TnavLinks={
    name: string,
    path: string
}
export default function NavLi({name , path} : TnavLinks) {
  return (
    
      <li>
        <NavLink to={path}>{name}</NavLink>
         </li>
    
  )
}
