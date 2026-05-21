const projects = ["project-1", "project-2", "project-3"];

export async function generateStaticParams() {
  return projects.map((slug) => ({ slug }));
}

export default async function DefaultProjectsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div
      className="font-sans grid grid-rows-[auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16"
      data-testid="default-projects-page"
    >
      <h1 className="text-5xl">My Projects</h1>
      <p>{slug}</p>
    </div>
  );
}
