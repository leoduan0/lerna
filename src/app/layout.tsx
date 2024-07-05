import type { Metadata } from 'next'
import { Header, Navigation } from '@/components'
import { Page } from '@/types'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lerna',
  description: 'A learning platform.',
}

const pages: Page[] = [
  {
    title: 'Home',
    type: 'page',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18px"
        viewBox="0 0 576 512"
        className="fill-black dark:fill-white"
      >
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
      </svg>
    ),
  },
  {
    title: 'About',
    type: 'page',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18px"
        viewBox="0 0 512 512"
        className="fill-black dark:fill-white"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
      </svg>
    ),
  },
  {
    title: 'Sciences',
    type: 'section',
    children: [
      {
        title: 'Mathematics',
        type: 'page',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            viewBox="0 0 576 512"
            className="fill-black dark:fill-white"
          >
            <path d="M282.6 78.1c8-27.3 33-46.1 61.4-46.1H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H344L238.7 457c-3.6 12.3-14.1 21.2-26.8 22.8s-25.1-4.6-31.5-15.6L77.6 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H77.6c22.8 0 43.8 12.1 55.3 31.8l65.2 111.8L282.6 78.1zM393.4 233.4c12.5-12.5 32.8-12.5 45.3 0L480 274.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 320l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z" />
          </svg>
        ),
        children: [
          {
            title: 'Geometry',
            type: 'page',
            children: [
              {
                title: 'Area',
                type: 'page',
              },
              {
                title: 'Volume',
                type: 'page',
              },
              {
                title: 'Surface Area',
                type: 'page',
              },
              {
                title: 'Pythagorean Theorem',
                type: 'page',
              },
              {
                title: 'Law of Sines',
                type: 'page',
              },
              {
                title: 'Law of Cosines',
                type: 'page',
              },
            ],
          },
          {
            title: 'Trigonometry',
            type: 'page',
            children: [
              {
                title: 'Identities',
                type: 'page',
              },
            ],
          },
          {
            title: 'Exponentiation',
            type: 'page',
          },
          {
            title: 'Logarithms',
            type: 'page',
          },
          {
            title: 'Factorials',
            type: 'page',
          },
          {
            title: 'Functions',
            type: 'page',
            children: [
              {
                title: 'Polynomials',
                type: 'page',
              },
            ],
          },
          {
            title: 'Statistics',
            type: 'page',
            children: [
              {
                title: 'Mean',
                type: 'page',
              },
              {
                title: 'Standard Deviation',
                type: 'page',
              },
            ],
          },
          {
            title: 'Calculus',
            type: 'page',
            children: [
              {
                title: 'Single Variable',
                type: 'page',
                children: [
                  {
                    title: 'Limits',
                    type: 'page',
                    children: [
                      {
                        title: 'Rules',
                        type: 'page',
                      },
                      {
                        title: 'Substitution',
                        type: 'page',
                      },
                      {
                        title: 'Divergence',
                        type: 'page',
                      },
                      {
                        title: 'Convergence',
                        type: 'page',
                      },
                      {
                        title: 'Manipulation',
                        type: 'page',
                      },
                    ],
                  },
                  {
                    title: 'Differentiation',
                    type: 'page',
                    children: [
                      {
                        title: "L'Hopital's Rule",
                        type: 'page',
                      },
                      {
                        title: 'Implicit Differentiation',
                        type: 'page',
                      },
                      {
                        title: 'Mean Value Theorem',
                        type: 'page',
                      },
                      {
                        title: 'Critical Points',
                        type: 'page',
                      },
                      {
                        title: 'Tangent Lines',
                        type: 'page',
                      },
                      {
                        title: 'Local Extrema',
                        type: 'page',
                      },
                      {
                        title: 'Inflection Points',
                        type: 'page',
                      },
                      {
                        title: 'Global Extrema',
                        type: 'page',
                      },
                    ],
                  },
                  {
                    title: 'Integration',
                    type: 'page',
                    children: [
                      {
                        title: 'U-Substitution',
                        type: 'page',
                      },
                      {
                        title: 'Partial Fractions',
                        type: 'page',
                      },
                      {
                        title: 'Parts',
                        type: 'page',
                      },
                      {
                        title: 'Definite Integration',
                        type: 'page',
                      },
                      {
                        title: 'Riemann Sums',
                        type: 'page',
                      },
                    ],
                  },
                ],
              },
              // {
              //   title: 'Multivariable',
              //   type: 'page',
              //   children: [
              //     {
              //       title: 'Limits',
              //       type: 'page',
              //     },
              //     {
              //       title: 'Partial Derivatives',
              //       type: 'page',
              //       children: [
              //         {
              //           title: 'Differentials',
              //           type: 'page',
              //         },
              //         {
              //           title: 'Chain Rule',
              //           type: 'page',
              //         },
              //         {
              //           title: 'The Del Operator',
              //           type: 'page',
              //         },
              //         {
              //           title: 'Directional Derivatives',
              //           type: 'page',
              //         },
              //       ],
              //     },
              //     {
              //       title: 'Multiple Integrals',
              //       type: 'page',
              //       // children: [
              //       //   {
              //       //     title: 'Spherical Coordinates',
              //       //     type: 'page',
              //       //   },
              //       // ],
              //     },
              //   ],
              // },
            ],
          },
          // {
          //   title: 'Imaginary Numbers',
          //   type: 'page',
          // },
        ],
      },
      {
        title: 'Physics',
        type: 'page',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            viewBox="0 0 512 512"
            className="fill-black dark:fill-white"
          >
            <path d="M256 398.8c-11.8 5.1-23.4 9.7-34.9 13.5c16.7 33.8 31 35.7 34.9 35.7s18.1-1.9 34.9-35.7c-11.4-3.9-23.1-8.4-34.9-13.5zM446 256c33 45.2 44.3 90.9 23.6 128c-20.2 36.3-62.5 49.3-115.2 43.2c-22 52.1-55.6 84.8-98.4 84.8s-76.4-32.7-98.4-84.8c-52.7 6.1-95-6.8-115.2-43.2C21.7 346.9 33 301.2 66 256c-33-45.2-44.3-90.9-23.6-128c20.2-36.3 62.5-49.3 115.2-43.2C179.6 32.7 213.2 0 256 0s76.4 32.7 98.4 84.8c52.7-6.1 95 6.8 115.2 43.2c20.7 37.1 9.4 82.8-23.6 128zm-65.8 67.4c-1.7 14.2-3.9 28-6.7 41.2c31.8 1.4 38.6-8.7 40.2-11.7c2.3-4.2 7-17.9-11.9-48.1c-6.8 6.3-14 12.5-21.6 18.6zm-6.7-175.9c2.8 13.1 5 26.9 6.7 41.2c7.6 6.1 14.8 12.3 21.6 18.6c18.9-30.2 14.2-44 11.9-48.1c-1.6-2.9-8.4-13-40.2-11.7zM290.9 99.7C274.1 65.9 259.9 64 256 64s-18.1 1.9-34.9 35.7c11.4 3.9 23.1 8.4 34.9 13.5c11.8-5.1 23.4-9.7 34.9-13.5zm-159 88.9c1.7-14.3 3.9-28 6.7-41.2c-31.8-1.4-38.6 8.7-40.2 11.7c-2.3 4.2-7 17.9 11.9 48.1c6.8-6.3 14-12.5 21.6-18.6zM110.2 304.8C91.4 335 96 348.7 98.3 352.9c1.6 2.9 8.4 13 40.2 11.7c-2.8-13.1-5-26.9-6.7-41.2c-7.6-6.1-14.8-12.3-21.6-18.6zM336 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
        ),
        children: [
          {
            title: 'Properties',
            type: 'page',
          },
          {
            title: 'Measurements',
            type: 'page',
          },
          {
            title: 'Kinematics',
            type: 'page',
          },
          {
            title: 'Momentum',
            type: 'page',
          },
          {
            title: 'Dynamics',
            type: 'page',
          },
          {
            title: 'Energy',
            type: 'page',
          },
          {
            title: 'Circular Motion',
            type: 'page',
          },
          {
            title: 'Oscillatory Motion',
            type: 'page',
          },
          {
            title: 'Waves',
            type: 'page',
          },
          {
            title: 'Gravitation',
            type: 'page',
          },
          {
            title: 'Thermodynamics',
            type: 'page',
          },
          {
            title: 'Electromagnetism',
            type: 'page',
          },
          {
            title: 'Circuits',
            type: 'page',
          },
          {
            title: 'Fluids',
            type: 'page',
          },
        ],
      },
    ],
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="fixed flex h-full w-full bg-white dark:bg-black">
        {/* "fixed" makes the iOS Safari toolbar persistent */}
        <Navigation pages={pages} />
        <div className="flex h-full w-full grow flex-col">
          <Header />
          <main className="w-full grow space-y-2 overflow-y-auto p-4 lg:px-48">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
