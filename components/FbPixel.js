"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID);
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return null;
}

export default FacebookPixel;
