import Container from "../components/Container";
import ImageWithFallback from "../components/ImageWithFallback";

const features = [
  { title: "American Express", desc: "", icon: "/images/feature-1.png" },
  { title: "J.P. Morgan", desc: "", icon: "/images/feature-2.png" },
  { title: "Bugcrowd", desc: "", icon: "/images/feature-3.png" },
];

export default function BrandCollab() {
  return (
    <section className="py-15 md:py-28 mx-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Brand collaboration
          </h2>
          <p className="mt-4 text-gray-400"></p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-border p-6">
              <div className="h-14 w-14 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={f.icon}
                  alt=""
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
