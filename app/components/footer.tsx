import { Link } from "@remix-run/react";

import { IconComponent } from "~/icons";
import { SocialNetworkI } from "~/interfaces/social-networks";

export function Footer({ socialNetworks }: { socialNetworks: SocialNetworkI[] }) {
  const year = new Date().getFullYear();

  return (
    <div className="container mx-auto my-4 flex flex-col items-center gap-3 text-slate-400 md:flex-row md:justify-between md:gap-0">
      <div className="text-sm flex gap-2 items-center text-center">
        &copy; {year} Template feito por
        <Link to="https://pinuya.site" target="_blank" className="text-blue-400">Tifany Nunes</Link>
      </div>

      <div className="flex gap-4">

        {socialNetworks.map(((socialMedia, index) => (
          <Link
            to={socialMedia.url}
            target="_blank"
            className="hover:text-slate-500 transition-colors"
            key={`footer-social-network-${index}`}
          >
            <IconComponent iconName={socialMedia.icon} size={20} />
          </Link>

        )))}
      </div>
    </div >
  );
}
