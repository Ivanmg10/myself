interface DefaultProjectsPageProps {
  params: { slug: string };
}

const projects = ["project-1", "project-2", "project-3"];

export async function generateStaticParams(): Promise<
  DefaultProjectsPageProps["params"][]
> {
  return projects.map((slug) => ({ slug }));
}

export default function DefaultProjectsPage({
  params,
}: DefaultProjectsPageProps) {
  return (
    <div
      className="font-sans grid grid-rows-[auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16"
      data-testid="default-projects-page"
    >
      <h1 className="text-5xl">My Projects</h1>
      <p>{params.slug}</p>
    </div>
  );
}
