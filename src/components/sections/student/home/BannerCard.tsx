import React from "react";
import Image from "next/image";
import { UploadButton } from "@/components/common/ui";
import { bannerCardData } from "@/data/student/HomeData";
import { BannerCardProps } from "@/types/student/HomeTypes";

export default function BannerCard({
  backgroundSrc = bannerCardData.defaultBackgroundSrc,
  heading = bannerCardData.defaultHeading,
  onFileSelect,
  className = "",
}: BannerCardProps) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  function openFilePicker() {
    inputRef.current?.click();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    onFileSelect?.(file);
  }

  return (
    <section className={`w-full mx-auto ${className}`}>
      <div
        className="relative w-full bg-black rounded-md overflow-hidden
                   min-h-[220px] md:min-h-[352px] flex items-start"
        aria-label="profile-card"
      >
        <Image 
          src={backgroundSrc} 
          height={1000}
          width={1000}
          alt="" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        <div className="relative z-10 w-full px-4 py-6 md:py-8 md:px-8">
          <div className="flex w-full items-center justify-center md:justify-end">
            <div className="relative">
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
                aria-hidden
              />

              <UploadButton
                onClick={openFilePicker}
                heading={heading}
                ariaLabel="Upload new photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
