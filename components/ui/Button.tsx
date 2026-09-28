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
  "inline-flex items-center justify-center gap-2 border-2 border-foreground px-5 py-3 font-mono text-sm uppercase tracking-wide";

const variants = {
  primary: "bg-foreground text-background hover:bg-background hover:text-foreground",
  ghost: "bg-background text-foreground hover:bg-foreground hover:text-background",
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
