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
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-[transform,background-color,color,box-shadow] duration-200 active:scale-[0.99]";

const variants = {
  primary:
    "bg-primary text-cream shadow-soft hover:bg-navy-800 focus-visible:ring-2 focus-visible:ring-ring",
  ghost:
    "border border-navy-900/20 bg-cream text-foreground shadow-[var(--shadow-inset)] backdrop-blur-md hover:border-sage-500 hover:text-sage-700",
};

export function Button(props: ButtonLinkProps | ButtonNativeProps) {
  const { variant = "primary", className, children } = props;
  const styles = cn(base, variants[variant], className);

  if ("href" in props && typeof props.href === "string") {
    const { href, target, rel } = props;
    return (
      <Link href={href} className={styles} target={target} rel={rel}>
        {children}
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
