import { Download } from "lucide-react";
import { ClientOnly } from "~/components/client-only";
import Curriculum from "~/components/Curriculum.client";

export default function curriculum() {
  return (
    <div className="justify-center items-center flex flex-col gap-5">
      <div className="pt-4a">
        <h1 className="text-4xl text-center">Meu Currículo</h1>
      </div>

      <div className="flex flex-col items-center justify-start h-screen pt-10 gap-4 shadow-md">
        <div>
          <ClientOnly>{() => <Curriculum />}</ClientOnly>
        </div>
      </div>

      <div className="pt-5">
        <a
          href="/hudson-farias-resume.pdf"
          download="hudson-farias-resume.pdf"
          className="inline-flex bg-gradient-to-r from-blue-500 to-slate-500 gap-2 items-center px-4 py-2 text-sm font-medium text-foreground rounded-md transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1"
        >
          <Download /> Baixar Currículo
        </a>
      </div>
    </div>
  );
}
