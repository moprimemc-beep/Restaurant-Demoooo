import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { team } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function TeamGrid() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          number="04"
          eyebrow="Unser Team"
          title="Die Menschen dahinter."
          description="Fünf Menschen, die jeden Tag dafür sorgen, dass sich die Trattoria Bellavista wie ein Stück Italien anfühlt."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <RevealItem key={member.name}>
              <div className="flex h-full flex-col rounded-[1.5rem] bg-cream p-7 shadow-card">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 font-display text-lg italic text-primary">
                  {initials(member.name)}
                </span>
                <h3 className="mt-5 font-display text-xl text-ink">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{member.bio}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
