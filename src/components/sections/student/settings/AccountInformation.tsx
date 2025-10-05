import React from "react";

export default function AccountInformation() {
  return (
    <section className="w-full mx-auto mt-2">
      <div className="bg-[#111827] rounded-sm p-6 md:p-8">
        <div className="mb-4">
          <h3 className="font-poppins font-bold text-[11px] leading-4 text-white uppercase">
            Account Information
          </h3>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-24">
          <div>
            <label className="block font-poppins font-bold text-[13px] leading-4 text-[#888888] mb-2">
              Company Name
            </label>
            <div
              className="bg-[#1F2937] border border-[rgba(204,204,204,0.8)] rounded-sm
                          px-4 py-3 h-[44px] flex items-center"
            >
              <input
                className="bg-transparent outline-none w-full font-poppins font-medium text-[13px] leading-[13px] text-[#959595]"
                placeholder="ACME Corp"
                aria-label="Company Name"
              />
            </div>
          </div>

          {/* Website */}
          <div>
            <label className="block font-poppins font-bold text-[13px] leading-4 text-[#888888] mb-2">
              Website
            </label>
            <div className="bg-[#1F2937] border border-[rgba(204,204,204,0.8)] rounded-sm px-4 py-3 h-[44px] flex items-center">
              <input
                className="bg-transparent outline-none w-full font-poppins text-[13px] leading-[20px] text-[#959595]"
                placeholder="https://example.com"
                aria-label="Website"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block font-poppins font-bold text-[13px] leading-4 text-[#888888] mb-2">
              Location
            </label>
            <div className="bg-[#1F2937] border border-[rgba(204,204,204,0.8)] rounded-sm px-4 py-3 h-[44px] flex items-center">
              <input
                className="bg-transparent outline-none w-full font-poppins text-[16px] leading-[16px] text-white"
                placeholder="Mumbai"
                aria-label="Location"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-poppins font-bold text-[13px] leading-4 text-[#888888] mb-2">
              Phone Number
            </label>
            <div className="bg-[#1F2937] border border-[rgba(204,204,204,0.8)] rounded-sm px-4 py-3 h-[44px] flex items-center">
              <input
                className="bg-transparent outline-none w-full font-poppins font-medium text-[13px] leading-[13px] text-[#959595]"
                placeholder="+92 300 0000000"
                aria-label="Phone Number"
              />
            </div>
          </div>

          {/* Email id */}
          <div>
            <label className="block font-poppins font-bold text-[13px] leading-4 text-[#888888] mb-2">
              Email id
            </label>
            <div className="bg-[#1F2937] border border-[rgba(204,204,204,0.8)] rounded-sm px-4 py-3 h-[44px] flex items-center">
              <input
                className="bg-transparent outline-none w-full font-poppins font-bold text-[13px] leading-[13px] text-[#959595]"
                placeholder="floyd.miles@example.com"
                aria-label="Email id"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
