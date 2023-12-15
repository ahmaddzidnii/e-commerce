"use client";

import { Separator } from "@/components/ui/separator";
import { ElementRef, useEffect, useRef, useState } from "react";

export const HeadingRekomendasi = () => {
  const rekomendasiRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 1) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      });
    };

    // Buat instance IntersectionObserver
    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });

    // Observasi elemen dengan ref
    if (rekomendasiRef.current) {
      observer.observe(rekomendasiRef.current);
    }

    // Hentikan observasi saat komponen di-unmount
    return () => {
      if (rekomendasiRef.current) {
        observer.unobserve(rekomendasiRef.current);
      }
    };
  }, []);

  return (
    <div ref={rekomendasiRef} className={`${isFixed ? "fixed top-24 w-[95.5%] z-[99]" : ""}`}>
      <div className="relative w-full h-full px-4 py-4 bg-white">
        <h1 className="text-xl font-semibold text-center text-orange-700">Rekomendasi Untuk Anda</h1>
        <Separator className="absolute bottom-0 left-0 bg-orange-700 h-2" />
      </div>
    </div>
  );
};
