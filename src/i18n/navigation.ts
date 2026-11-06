import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Language-aware versions of Next.js navigation helpers.
// <Link href="/"> automatically becomes /en or /fr for the current language.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
