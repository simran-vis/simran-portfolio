import { generateMetadata } from "@/lib/seo";
import ProjectsClientPage from "./ProjectsClientPage";

export const metadata = generateMetadata({
   title: "Contact | Simran Vishwakarma - Front End Developer",
  description:
    "Get in touch with simran vishwakarma for freelance projects and collaborations.",
});

export default function ProjectsPage() {
  return <ProjectsClientPage />;
}
