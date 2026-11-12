import Image from "next/image";
import { site } from "@/content/site";

/** Round avatar with the mantra slowly rotating around it. */
export function AvatarRing() {
  const phrase = `${site.heroMantra.replace(/,? AND |, /g, " · ")} · `;
  return (
    <div className="group relative aspect-square w-60 sm:w-72 lg:w-96">
      <svg
        viewBox="0 0 200 200"
        aria-hidden
        className="avatar-ring absolute inset-0 size-full text-muted"
      >
        <defs>
          <path id="ring-path" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
        </defs>
        <text className="fill-current font-mono text-[11px] uppercase" letterSpacing="4.2">
          <textPath href="#ring-path" textLength="548">
            {phrase.repeat(3)}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-[16%] overflow-hidden rounded-full bg-surface ring-1 ring-line">
        <Image
          src="/bulut_bust.png"
          alt={`Illustrated portrait of ${site.name}`}
          fill
          priority
          sizes="(max-width: 640px) 165px, (max-width: 1024px) 200px, 265px"
          className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-110"
        />
      </div>
    </div>
  );
}
