import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLecturerImg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 350 318"
    {...props}
  >
    <rect width={350} height={180} y={138} fill="#DBDDFD" rx={16} />
    <mask
      id="lecturer_img_svg__a"
      width={350}
      height={180}
      x={0}
      y={138}
      maskUnits="userSpaceOnUse"
      style={{ maskType: 'alpha' }}
    >
      <rect width={350} height={180} y={138} fill="#CACCFC" rx={16} />
    </mask>
    <g mask="url(#lecturer_img_svg__a)">
      <rect
        width={185.769}
        height={60.296}
        x={174.999}
        y={132}
        fill="url(#lecturer_img_svg__b)"
        rx={30.148}
      />
      <rect
        width={259.359}
        height={151}
        x={115.769}
        y={167}
        fill="url(#lecturer_img_svg__c)"
        rx={75.5}
      />
      <rect
        width={185.769}
        height={80}
        x={253.351}
        y={112.346}
        fill="url(#lecturer_img_svg__d)"
        rx={40}
      />
      <rect width={185.769} height={60.296} x={189.358} y={258} fill="#5F66F6" rx={30.148} />
    </g>
    <path fill="url(#lecturer_img_svg__e)" d="M0 0h332v318H0z" transform="matrix(-1 0 0 1 332 0)" />
    <defs>
      <linearGradient
        id="lecturer_img_svg__b"
        x1={174.999}
        x2={360.768}
        y1={162.148}
        y2={162.148}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B8BBFB" />
        <stop offset={1} stopColor="#7177F7" />
      </linearGradient>
      <linearGradient
        id="lecturer_img_svg__c"
        x1={375.128}
        x2={142.979}
        y1={241.747}
        y2={321.982}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5F66F6" />
        <stop offset={1} stopColor="#A6AAFA" />
      </linearGradient>
      <linearGradient
        id="lecturer_img_svg__d"
        x1={253.351}
        x2={439.12}
        y1={152.346}
        y2={152.346}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CACCFC" />
        <stop offset={1} stopColor="#9499F9" />
      </linearGradient>
      <pattern
        id="lecturer_img_svg__e"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#lecturer_img_svg__f" transform="matrix(.00047 0 0 .00049 -.351 0)" />
      </pattern>
      <image
        id="lecturer_img_svg__f"
        width={3641}
        height={2048}
      />
    </defs>
  </svg>
);
export default SvgLecturerImg;