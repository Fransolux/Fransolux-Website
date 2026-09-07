import { WorkList } from "@/utils/Projects";

export default function sitemap() {
  const baseUrl = "https://fransolux.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...WorkList.map((project) => ({
      url: `${baseUrl}/proyectos/${project.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
