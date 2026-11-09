"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function VisitorTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // Avoid double counting same path in rapid succession
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;

    // Do not track admin back-office navigation
    if (pathname.startsWith("/admin") || pathname.startsWith("/api")) return;

    try {
      // Get or create persistent visitor ID
      let vid = localStorage.getItem("ecom_visitor_id");
      if (!vid) {
        vid = "v_" + Math.random().toString(36).substring(2, 12) + "_" + Date.now().toString(36);
        localStorage.setItem("ecom_visitor_id", vid);
      }

      const payload = JSON.stringify({
        path: pathname,
        visitorId: vid,
        referrer: typeof document !== "undefined" ? document.referrer : "",
      });

      if (typeof navigator !== "undefined" && navigator.sendBeacon) {
        navigator.sendBeacon("/api/analytics/track", payload);
      } else {
        fetch("/api/analytics/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // Ignore client tracking errors
    }
  }, [pathname]);

  return null;
}
