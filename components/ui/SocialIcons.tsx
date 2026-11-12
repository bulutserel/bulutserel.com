import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandSoundcloud,
  IconMail,
} from "@tabler/icons-react";
import { social } from "@/content/social";

const items = [
  { href: social.github, label: "GitHub", Icon: IconBrandGithub },
  { href: social.linkedin, label: "LinkedIn", Icon: IconBrandLinkedin },
  { href: social.soundcloud, label: "SoundCloud", Icon: IconBrandSoundcloud },
  { href: social.email, label: "Email", Icon: IconMail },
];

export function SocialIcons({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {items.map(({ href, label, Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external && { target: "_blank", rel: "noreferrer" })}
              className="grid size-11 place-items-center rounded-full border border-line text-muted transition-[color,background-color,border-color,transform] duration-300 ease-out-expo hover:-translate-y-1 hover:border-foreground hover:bg-foreground hover:text-background"
            >
              <Icon aria-hidden size={20} stroke={1.5} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
