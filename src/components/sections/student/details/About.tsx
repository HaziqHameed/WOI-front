import { Poppins } from 'next/font/google'
import React from 'react'
import GridMap from './GridMap';
import { details } from '@/data/student/CompanyDetails';
import Description from './Description';
import SocialLinksManager from './SocialLinkManager';
import { aboutContent } from '@/data/student/AboutContent';
const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
export function About() {
  return (
    <>
      <h1
        className={`
        w-full h-[36px]
        ${poppins.className} font-bold text-[24px] leading-[36px]
        text-white
        `}
      >
        {aboutContent.title}
      </h1>
      <GridMap data={details} />
      <Description
        heading={aboutContent.description.heading}
        body={aboutContent.description.body}
      />
      <SocialLinksManager/>
    </>
  )
}