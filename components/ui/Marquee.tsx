export function Marquee({ items }: { items: readonly string[] }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {[...items, ...items].map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center">
          <span className="px-6 text-4xl font-medium uppercase tracking-[-0.03em] text-faint transition-colors duration-500 hover:text-foreground sm:px-10 sm:text-6xl">
            {item}
          </span>
          <span aria-hidden className="size-2 rounded-full bg-faint" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee overflow-hidden border-y border-line py-6 sm:py-8">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
