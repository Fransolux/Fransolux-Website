import { redirect } from "next/navigation";

import { WorkList } from "@/utils/Projects";

import ProjectRenderer from "@/utils/ProjectRender/ProjectRender";
import Navbar from "@/app/components/Navbar";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export function generateStaticParams() {
  return WorkList.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = WorkList.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.header.content.title,
    description: project.header.content.text,
  };
}

async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = WorkList.find((item) => item.slug === slug);

  if (!project) {
    redirect("/");
  }

  return (
    <main>
      <Navbar />
      <ProjectRenderer project={project} />
      <CTA />
      <Footer />
    </main>
  );
}

export default ProjectPage;
