"use client";

import { useSyncExternalStore } from "react";

function getMediaQuery() {
  return window.matchMedia("(prefers-reduced-motion: reduce)");
}

function subscribeToReducedMotion(callback: () => void) {
  const mq = getMediaQuery();
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return getMediaQuery().matches;
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribeToReducedMotion, getReducedMotionSnapshot);
}
