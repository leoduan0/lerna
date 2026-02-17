import { Atom, HatGlasses, House, Info, SquareRadical } from "lucide-react"

export type TPage = {
  title: string
  icon?: React.ReactNode
  children?: TPage[]
}

export const pages: TPage[] = [
  {
    title: "Home",
    icon: <House size={20} />,
  },
  {
    title: "Mathematics",
    icon: <SquareRadical size={20} />,
    children: [
      {
        title: "Algebra",
        children: [
          {
            title: "Operation",
            children: [
              { title: "Exponentiation" },
              { title: "Logarithm" },
              { title: "Factorial" },
            ],
          },
          {
            title: "Functions",
            children: [
              {
                title: "Polynomial",
                children: [{ title: "Polynomial Remainder Theorem" }],
              },
            ],
          },
          {
            title: "Linear Algebra",
            children: [
              { title: "Space" },
              { title: "Norm" },
              { title: "Scalar" },
              {
                title: "Vector",
                children: [
                  { title: "Basis" },
                  { title: "Arithmetic" },
                  { title: "Dot Product" },
                  { title: "Cross Product" },
                  { title: "Projection" },
                  { title: "Span" },
                ],
              },
              {
                title: "Matrix",
                children: [
                  { title: "Arithmetic" },
                  { title: "Determinant" },
                  // { title: 'Inversion' },
                  // { title: 'Eigenvalue and Eigenvector' },
                ],
              },
            ],
          },
          { title: "Cauchy-Schwarz Inequality" },
          { title: "Sophie Germains Identity" },
          { title: "Difference of Two Squares" },
          // { title: 'Euclidean Algorithm' },
        ],
      },
      {
        title: "Geometry",
        children: [
          { title: "Object" },
          { title: "Length" },
          { title: "Area" },
          { title: "Volume" },
          { title: "Surface Area" },
          {
            title: "Trigonometry",
            children: [
              { title: "Identities" },
              { title: "Pythagorean Theorem" },
              { title: "Law of Sines" },
              { title: "Law of Cosines" },
            ],
          },
          // {
          //   title: 'Coordinate System',
          //   children: [
          //     { title: 'Line' },
          //     { title: 'Cartesian' },
          //     { title: 'Polar' },
          //     { title: 'Spherical' },
          //   ],
          // },
        ],
      },
      {
        title: "Calculus",
        children: [
          {
            title: "Single Variable",
            children: [
              {
                title: "Limit",

                children: [
                  { title: "Rules" },
                  { title: "Substitution" },
                  { title: "Divergence" },
                  { title: "Convergence" },
                  { title: "Manipulation" },
                ],
              },
              {
                title: "Differentiation",
                children: [
                  { title: "L'Hopital's Rule" },
                  { title: "Implicit Differentiation" },
                  { title: "Mean Value Theorem" },
                  { title: "Critical Point" },
                  { title: "Tangent Line" },
                  { title: "Local Extremum" },
                  { title: "Inflection Point" },
                  { title: "Global Extremum" },
                ],
              },
              {
                title: "Integration",
                children: [
                  { title: "U-Substitution" },
                  { title: "Partial Fraction" },
                  { title: "Parts" },
                  { title: "Definite Integration" },
                  { title: "Riemann Sum" },
                ],
              },
            ],
          },
          {
            title: "Multivariable",

            children: [
              { title: "Limit" },
              {
                title: "Partial Derivative",

                children: [
                  { title: "Differential" },
                  { title: "Chain Rule" },
                  { title: "Del Operator" },
                  { title: "Directional Derivative" },
                ],
              },
              {
                title: "Multiple Integral",
                // children: [{ title: 'Spherical Coordinate' }],
              },
            ],
          },
        ],
      },
      {
        title: "Statistics",
        children: [
          { title: "Mean", children: [{ title: "Inequalities" }] },
          { title: "Standard Deviation" },
        ],
      },
    ],
  },
  {
    title: "Physics",
    icon: <Atom size={20} />,
    children: [
      { title: "Properties" },
      { title: "Measurements" },
      { title: "Kinematics" },
      { title: "Momentum" },
      { title: "Dynamics" },
      { title: "Energy" },
      { title: "Circular Motion" },
      { title: "Oscillatory Motion" },
      { title: "Wave" },
      { title: "Gravitation" },
      { title: "Fluid" },
      { title: "Electromagnetism", children: [{ title: "Circuit" }] },
      { title: "Thermodynamics" },
      // { title: 'Optics' },
    ],
  },
  {
    title: "Privacy Policy",
    icon: <HatGlasses size={20} />,
  },
  {
    title: "About",
    icon: <Info size={20} />,
  },
]
