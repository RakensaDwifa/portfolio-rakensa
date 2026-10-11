import type Lenis from "lenis";

let current: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  current = lenis;
}

export function getLenis() {
  return current;
}