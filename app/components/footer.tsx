import { Link } from "@remix-run/react";
import { socialNetworks } from "../constants/social-networks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="container mx-auto my-4 flex flex-col items-center gap-3 text-slate-400 md:flex-row md:justify-between md:gap-0">
      <div className="text-sm flex gap-2 items-center text-center">
        &copy; {year} Template feito por
        <Link to="https://pinuya.site" target="_blank" className="text-blue-400">Tifany Nunes</Link>
      </div>

      {/* suas redes sociais */}
      <div className="flex gap-4">

        {socialNetworks.map((({ url: socialMediaUrl, icon: SocialMediaIcon }) => (
          <Link
            to={socialMediaUrl}
            target="_blank"
            className="hover:text-slate-500 transition-colors"
          >
            <SocialMediaIcon size={20} />
          </Link>

        )))}
      </div>
    </div >
  );
}
