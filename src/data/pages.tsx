import TPage from '@/types/TPage'
import {
  faAtom,
  faCircleInfo,
  faHouse,
  faSquareRootVariable,
  faVial,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const pages: TPage[] = [
  {
    title: 'Home',
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    title: 'About',
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
  },
  {
    title: 'Mathematics',
    icon: <FontAwesomeIcon icon={faSquareRootVariable} />,
    children: [
      {
        title: 'Algebra',
        children: [
          { title: 'Number', children: [{ title: 'Imaginary Number' }] },
          {
            title: 'Operation',
            children: [
              // { title: 'Addition' },
              // { title: 'Multiplication' },
              // { title: 'Subtraction' },
              // { title: 'Division' },
              { title: 'Exponentiation' },
              { title: 'Logarithm' },
              { title: 'Factorial' },
            ],
          },
          {
            title: 'Map',
            children: [
              {
                title: 'Functions',
                children: [
                  {
                    title: 'Polynomial',
                    children: [{ title: 'Polynomial Remainder Theorem' }],
                  },
                ],
              },
              // { title: 'Morphism' },
            ],
          },
          {
            title: 'Linear Algebra',
            children: [
              { title: 'Space' },
              { title: 'Norm' },
              { title: 'Scalar' },
              {
                title: 'Vector',
                children: [
                  { title: 'Basis' },
                  { title: 'Arithmetic' },
                  { title: 'Dot Product' },
                  { title: 'Cross Product' },
                  { title: 'Projection' },
                  { title: 'Span' },
                ],
              },
              {
                title: 'Matrix',
                children: [
                  { title: 'Arithmetic' },
                  { title: 'Determinant' },
                  // { title: 'Inversion' },
                  // { title: 'Eigenvalue and Eigenvector' },
                ],
              },
            ],
          },
          { title: 'Cauchy-Schwarz Inequality' },
          { title: 'Sophie Germains Identity' },
          { title: 'Difference of Two Squares' },
          // { title: 'Euclidean Algorithm' },
        ],
      },
      {
        title: 'Geometry',
        children: [
          { title: 'Object' },
          { title: 'Length' },
          { title: 'Area' },
          { title: 'Volume' },
          { title: 'Surface Area' },
          {
            title: 'Trigonometry',
            children: [
              { title: 'Identities' },
              { title: 'Pythagorean Theorem' },
              { title: 'Law of Sines' },
              { title: 'Law of Cosines' },
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
        title: 'Analysis',
        children: [
          {
            title: 'Calculus',
            children: [
              {
                title: 'Single Variable',
                children: [
                  {
                    title: 'Limit',

                    children: [
                      { title: 'Rules' },
                      { title: 'Substitution' },
                      { title: 'Divergence' },
                      { title: 'Convergence' },
                      { title: 'Manipulation' },
                    ],
                  },
                  {
                    title: 'Differentiation',
                    children: [
                      { title: "L'Hopital's Rule" },
                      { title: 'Implicit Differentiation' },
                      { title: 'Mean Value Theorem' },
                      { title: 'Critical Point' },
                      { title: 'Tangent Line' },
                      { title: 'Local Extremum' },
                      { title: 'Inflection Point' },
                      { title: 'Global Extremum' },
                    ],
                  },
                  {
                    title: 'Integration',
                    children: [
                      { title: 'U-Substitution' },
                      { title: 'Partial Fraction' },
                      { title: 'Parts' },
                      { title: 'Definite Integration' },
                      { title: 'Riemann Sum' },
                    ],
                  },
                ],
              },
              {
                title: 'Multivariable',

                children: [
                  { title: 'Limit' },
                  {
                    title: 'Partial Derivative',

                    children: [
                      { title: 'Differential' },
                      { title: 'Chain Rule' },
                      { title: 'Del Operator' },
                      { title: 'Directional Derivative' },
                    ],
                  },
                  {
                    title: 'Multiple Integral',
                    // children: [{ title: 'Spherical Coordinate' }],
                  },
                ],
              },
            ],
          },
        ],
      },
      // { title: 'Number Theory' },
      // { title: 'Discreet Mathematics' },
      // { title: 'Set Theory' },
      // { title: 'Logic' },
      {
        title: 'Statistics',
        children: [
          { title: 'Mean', children: [{ title: 'Inequalities' }] },
          { title: 'Standard Deviation' },
        ],
      },
    ],
  },
  {
    title: 'Physics',
    icon: <FontAwesomeIcon icon={faAtom} />,
    children: [
      { title: 'Properties' },
      { title: 'Measurements' },
      {
        title: 'Classical Mechanics',
        children: [
          { title: 'Kinematics' },
          { title: 'Momentum' },
          { title: 'Dynamics' },
          { title: 'Energy' },
          { title: 'Circular Motion' },
          { title: 'Oscillatory Motion' },
          { title: 'Wave' },
          { title: 'Gravitation' },
          { title: 'Fluid' },
        ],
      },
      { title: 'Electromagnetism', children: [{ title: 'Circuit' }] },
      { title: 'Thermodynamics' },
      // { title: 'Optics' },
    ],
  },
  {
    title: 'Chemistry',
    icon: <FontAwesomeIcon icon={faVial} />,
    children: [
      // { title: 'Stoichiometry' },
      // { title: 'Nomenclature' },
      { title: 'Lewis Structure' },
      // { title: 'Equilibrium' },
      { title: 'Oxidation and Reduction' },
      // { title: 'Thermodynamics' },
    ],
  },
  // {
  //   title: 'Music',
  //   icon: <FontAwesomeIcon icon={faMusic} />,
  //   children: [{ title: 'Pitch and Duration' }, { title: 'Notes and Rests' }],
  // },
]

export default pages
