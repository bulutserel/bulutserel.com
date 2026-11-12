import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Shared = {
  variant?: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

export type ButtonLinkProps = Shared &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> & {
    href: string;
  };

export type ButtonNativeProps = Shared &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    className?: string;
    href?: undefined;
  };

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-[background-color,color,border-color,transform] duration-300 ease-out-expo active:scale-[0.97]";

const variants = {
  primary: "border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground",
  ghost: "border-line text-foreground hover:border-foreground",
};

function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
    >
      &rarr;
    </span>
  );
}

export function Button(props: ButtonLinkProps | ButtonNativeProps) {
  const { variant = "primary", className, children } = props;
  const styles = cn(base, variants[variant], className);

  if ("href" in props && typeof props.href === "string") {
    const { href, target, rel } = props;
    return (
      <Link href={href} className={styles} target={target} rel={rel}>
        {children}
        <Arrow />
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, type, ...buttonAttrs } =
    props as ButtonNativeProps;
  return (
    <button type={type ?? "button"} className={styles} {...buttonAttrs}>
      {children}
    </button>
  );
}
