interface AboutPageProps {
  params: { slug: string };
}

const projects = ["project-1", "project-2", "project-3"];

export async function generateStaticParams(): Promise<
  AboutPageProps["params"][]
> {
  return projects.map((slug) => ({ slug }));
}

export default function AboutPage({ params }: AboutPageProps) {
  return (
    <div className="font-sans grid grid-rows-[auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <h1 className="text-5xl">My Projects</h1>
      <p>{params.slug}</p>
    </div>
  );
}
