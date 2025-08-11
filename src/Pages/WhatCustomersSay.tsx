import Container from "../components/Container";

const whatCustomersSay = [
  {
    quote:
      "Defence.Bug has been instrumental in strengthening our security posture. Their VAPT process was thorough, and the team provided actionable insights that helped us patch vulnerabilities before they could be exploited",
  },
  {
    quote:
      "The vCISO service from Defence.Bug gave us the strategic direction we needed. Their roadmap and security controls implementation have significantly reduced our risk exposure",
    author: "",
    role: "",
  },
];

export default function WhatCustomersSay() {
  return (
    <section className="w-75vw m-auto py-10 md:py-28 px-4 sm:px-8 lg:mx-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
            What customers say
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {whatCustomersSay.map((t, i) => (
            <figure
              key={i}
              className="rounded-xl border border-border p-6 sm:p-8"
            >
              <blockquote className="text-base sm:text-lg text-gray-100">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs sm:text-sm text-gray-200">
                {t.author} {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
