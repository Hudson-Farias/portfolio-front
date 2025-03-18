import { Link } from "@remix-run/react";
import { FaGithub } from "react-icons/fa";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/#skills" },
  { name: "Projetos", href: "/#projects" },
  { name: "Admin", href: "/admin" },
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ul className="hidden space-x-6 sm:flex">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>
                <span className="relative cursor-pointer group">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link to={"https://github.com/Hudson-Farias"} target="_blank">
          <FaGithub className="cursor-pointer hover:text-slate-500 h-5 w-5 hidden sm:block" />
        </Link>
      </nav>
    </header>
  );
}
