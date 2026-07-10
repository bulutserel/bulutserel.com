"use client";

import { useEffect } from "react";

/** Old /about URL scrolls to the About section on the home page. */
export default function AboutLegacyRedirect() {
  useEffect(() => {
    window.location.replace("/#about");
  }, []);

  return (
    <p className="mx-auto max-w-md py-section text-center text-sm text-muted">
      Opening About on the home page…
    </p>
  );
}
