import { Poppins } from 'next/font/google'
import React from 'react'
import GridMap from './GridMap';
import { details } from '@/data/student/CompanyDetails';
import Description from './Description';
import SocialLinksManager from './SocialLinkManager';
const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});
export function About() {
  return (
    <>
      <h1
        className="
        w-full h-[36px]
        font-poppins font-bold text-[24px] leading-[36px]
        text-white
      "
      >
        Company Details
      </h1>
      <GridMap data={details} />
      <Description
        heading={"About"}
        body={`cursus dui In Vestibulum ex lacus, facilisis Morbi dui lacus consectetur luctus enim. lorem. vel amet, non placerat non. Sed viverra vitae turpis quam Nullam fringilla commodo ipsum commodo ex. quis enim. sapien efficitur. adipiscing quam\nsit Ut enim. ullamcorper vitae est. nibh Donec non nibh eget enim. tincidunt massa consectetur orci non, Donec odio urna placerat odio Cras volutpat faucibus ex Sed laoreet facilisis ac tincidunt Nam lorem. scelerisque non, hendrerit in celerisque id urna. nisi scelerisque lorem. at nisi Vestibulum Nullam Donec orci dignissim, faucibus Nam ipsum viverra viverra nisl. non ac nec non at fringilla quis Ut sapien leo. lobortis, dolor non viverra laoreet Nunc non elit eget\n\nMorbi viverra viverra tincidunt dolor consectetur quis elit. nulla, dui elementum orci nibh amet, lacus, ex urna. ipsum efficitur. elit Vestibulum Ut dignissim, ullamcorper malesuada Sed sollicitudin. tincidunt efficitur. felis, odio quam`}
      />
      <SocialLinksManager/>
    </>
  )
}