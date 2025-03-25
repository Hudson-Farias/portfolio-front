import { useState, useEffect } from "react";
import { Curriculum, DownloadCurriculum } from "~/components/Curriculum.client";

export default function curriculum() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
      setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="justify-center items-center flex flex-col gap-5">
      <div>
        <h1 className="text-4xl text-center">Meu Currículo</h1>
      </div>

      <div>
          <DownloadCurriculum />
      </div>

      <div>
          <Curriculum />
      </div>

    </div>
  );
}
