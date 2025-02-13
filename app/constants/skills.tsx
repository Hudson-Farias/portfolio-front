import { IoLogoPython as Python } from "react-icons/io";
import { DiMongodb as MongoDB, DiRedis as Redis } from "react-icons/di";
import { FaReact as ReactIcon } from "react-icons/fa";
import { SiTypescript as Typescript, SiNextdotjs as NextJs, SiNginx as Nginx, SiSwagger as Swagger, SiPostman as Postman, SiDbeaver as Dbeaver } from "react-icons/si";
import { RiTailwindCssFill as Tailwind, RiPhpLine as Php } from "react-icons/ri";
import { GrMysql as Sql } from "react-icons/gr";
import { FaGitAlt as Git, FaDocker as Docker, FaCloud as CloudCog } from "react-icons/fa";
import { VscVscode as VsCode } from "react-icons/vsc";

export interface SkillI {
    name: string;
    icon: React.ElementType;
}

interface SkillsI {
    title: string,
    skills: SkillI[],
}


export const skills: SkillsI[] = [
    {
        title: "Backend",
        skills: [
            { name: "Python", icon: Python },
            { name: "PhP", icon: Php },
            { name: "SQL", icon: Sql },
            { name: "MongoDB", icon: MongoDB },
            { name: "Redis", icon: Redis },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "TypeScript", icon: Typescript },
            { name: "Next.js", icon: NextJs },
            { name: "React", icon: ReactIcon },
            { name: "Tailwind CSS", icon: Tailwind },
        ],
    },
    {
        title: "DevOps",
        skills: [
            { name: "Git", icon: Git },
            { name: "Docker", icon: Docker },
            { name: "CI/CD", icon: CloudCog },
            { name: "Nginx", icon: Nginx },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "VS Code", icon: VsCode },
            { name: "Swagger", icon: Swagger },
            { name: "Postman", icon: Postman },
            { name: "Dbeaver", icon: Dbeaver },
        ],
    },
];