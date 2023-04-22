import { MetaFunction } from "@remix-run/node";
import { ProjectCard } from "~/components";

export const meta: MetaFunction = () => {
    return {
      title: 'Projects',
      description: 'San Sebastian personal website',
    }
  }
export default function Projects(){
    return <ProjectCard />
}