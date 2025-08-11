import Container from "../components/Container";
import ImageWithFallback from "../components/ImageWithFallback";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
const features = [
  { title: "American Express", desc: "", icon: img1 },
  { title: "J.P. Morgan", desc: "", icon: img2 },
  { title: "Bugcrowd", desc: "", icon: img3 },
];

export default function BrandCollab() {
  return (
    <section className="w-75vw py-15 md:py-28 mx-32 m-auto">
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
              <div className="h-20 w-20 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={f.icon}
                  alt=""
                  className="h-44 object-contain"
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
