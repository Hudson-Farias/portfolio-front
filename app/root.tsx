import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import MouseMoveEffect from "./components/mouse-move-effect";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

import { SocialNetworksI } from "~/interfaces/social-networks";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
  },
];


export async function loader() {
  const response = await fetch(`${process.env.API_URL}/social_networks`);
  const data: SocialNetworksI = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  })

};


export function Layout({ children }: { children: React.ReactNode }) {
  const data: SocialNetworksI = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-473439473`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-473439473');
            `,
          }}
        /> */}

      </head>
      <body className="font-dmSans h-screen grid grid-rows-[1fr_14fr] overflow-hidden">
        <Scripts />
        <Nav socialNetworks={data.social_networks_header} />
        <div className="overflow-auto scrollbar-thin scrollbar-thumb-blue-500/10 scrollbar-track-slate-500/10">
          {children}
          <MouseMoveEffect />
          <ScrollRestoration />
          <Footer socialNetworks={data.social_networks_footer} />
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
