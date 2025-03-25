import { ClientOnly } from "~/components/client-only";
import { Curriculum, DownloadCurriculum } from "~/components/Curriculum.client";

export default function curriculum() {
  return (
    <div className="justify-center items-center flex flex-col gap-5">
      <div>
        <h1 className="text-4xl text-center">Meu Currículo</h1>
      </div>

      <div>
        <ClientOnly><DownloadCurriculum /></ClientOnly>
      </div>

      <div>
        <ClientOnly><Curriculum /></ClientOnly>
      </div>

    </div>
  );
}
