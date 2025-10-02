"use client"
import { PageHeaderProps } from "@/types/operationalLogs";
import React from "react";


export default function PageHeader({
  title,
  subtitle,
  actions,
  breadcrumbs,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  compact = false,
  ariaLabel
}: PageHeaderProps) {
  const baseClasses = compact 
    ? "w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
    : "w-full px-4 sm:px-6 lg:px-8 md:-mt-7 sm:mt-0 sm:py-8 lg:py-10";
    
  const titleClasses = compact
    ? "font-inter font-semibold text-xl sm:text-2xl lg:text-3xl leading-tight text-white"
    : "font-inter font-semibold text-2xl sm:text-3xl lg:text-[32px] leading-tight text-white";
    
  const subtitleClasses = compact
    ? "font-inter font-medium text-sm sm:text-base lg:text-lg leading-relaxed text-white/70"
    : "font-inter font-medium text-base sm:text-xl lg:text-[24px] leading-relaxed text-white/70";

  return (
    <header
      className={`${baseClasses} ${className}`}
      aria-label={ariaLabel || `${title} page header`}
    >
      <div className="flex flex-col justify-center items-start max-w-7xl">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 mb-2" aria-label="Breadcrumb">
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                {breadcrumb.href ? (
                  <a
                    href={breadcrumb.href}
                    className="text-white/50 hover:text-white/70 text-sm transition-colors"
                  >
                    {breadcrumb.label}
                  </a>
                ) : (
                  <span className="text-white/50 text-sm">
                    {breadcrumb.label}
                  </span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="text-white/30 text-sm">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
          <div className="flex flex-col">
            <div className="flex flex-row gap-1">
              <h1 className={`${titleClasses} ${titleClassName}`}>
                {title}
              </h1>
            </div>

            {subtitle && (
              <div className="flex flex-row gap-1 mt-2">
                <p className={`${subtitleClasses} ${subtitleClassName}`}>
                  {subtitle}
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
