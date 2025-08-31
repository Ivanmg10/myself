export default function AboutPage({ params }: { params: { slug: string } }) {
  return (
    <div className="font-sans grid grid-rows-[auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <h1 className="text-5xl">My Projects</h1>
      <p>{params.slug}</p>
    </div>
  );
}
