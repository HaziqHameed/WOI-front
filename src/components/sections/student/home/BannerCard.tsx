import React from "react";
import Image from "next/image";

type Props = {
  backgroundSrc?: string;
  heading?: string;
  onFileSelect?: (file: File | null) => void;
  className?: string;
};

export default function BannerCard({
  backgroundSrc = "/images/banner.png",
  heading = "Upload Image",
  onFileSelect,
  className = "",
}: Props) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  function openFilePicker() {
    inputRef.current?.click();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    onFileSelect?.(file);
  }

  return (
    <section className={`w-full max-w-5xl mx-auto px-4 ${className}`}>
      {/* Card */}
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
        {/* overlay to darken the background for readable content */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}

        {/* content inside card (keeps spacing and centers on small screens) */}
        <div className="relative z-10 w-full px-4 py-6 md:py-8 md:px-8">
          {/* top area: Upload button aligned to right on md+, centered on mobile */}
          <div className="flex w-full items-center justify-center md:justify-end">
            <div className="relative">
              {/* Hidden native file input */}
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
                aria-hidden
              />

              {/* Button */}
              <button
                type="button"
                onClick={openFilePicker}
                className="
                  inline-flex items-center gap-2
                  px-4 py-2.5
                  min-w-[120px] md:min-w-[147px]
                  h-[40px] md:h-[44px]
                  bg-gradient-to-r from-[#FFA844] to-[#FF6D68]
                  rounded-[6px]
                  font-poppins font-bold text-[12px] md:text-[12px] leading-[120%]
                  text-white
                  shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB88A]
                "
                aria-label="Upload new photo"
              >
                {/* text */}
                <span className="whitespace-nowrap">{heading}</span>

                {/* circular icon */}
                <span
                  className="
                    w-5 h-5 rounded-full bg-white flex items-center justify-center
                    drop-shadow-sm
                  "
                  aria-hidden
                >
                  {/* simple image icon using SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="block"
                    aria-hidden
                  >
                    <path
                      d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14"
                      stroke="#111827"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 15l-5-5-3 3-4-4-4 6"
                      stroke="#111827"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* optional centered content below the button */}
          {/* <div className="mt-6 md:mt-10 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            <h3 className="font-poppins font-bold text-white text-lg md:text-2xl leading-7">
              Profile background
            </h3>
            <p className="mt-3 text-sm md:text-base text-white/90 font-poppins">
              You can upload a new image to update the profile background. Images are
              automatically optimized for different screen sizes.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
