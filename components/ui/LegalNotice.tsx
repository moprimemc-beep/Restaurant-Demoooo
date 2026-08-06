export default function LegalNotice({ notice }: { notice: string }) {
  return (
    <div className="mb-12 rounded-xl border border-accent/30 bg-accent/10 p-5 text-sm leading-relaxed text-ink-soft">
      {notice}
    </div>
  );
}
