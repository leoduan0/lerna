import { Example, Math, Section, Text } from '@/components'

export default function Partial_Fractions() {
  return (
    <Section text="Partial Fractions" level={1}>
      <Text type={'block'}>
        Given a function <Math math={'f(x)'} type={'inline'} /> to integrate, if
        it is in a fractional form, then one may integrate it using{' '}
        <strong>partial fractions</strong>.
      </Text>
      <Example level={2}>
        <Text type={'block'}>
          Given{' '}
          <Math math={'\\int \\frac{3x+1}{x^2+2x} \\,dx'} type={'inline'} />, it
          is tedious to evaluate the integral directly. However, using partial
          fractions, we can split the fraction up like so:
        </Text>
        <table>
          <tr>
            <td>
              <Math math={'\\int \\frac{3x+1}{x^2+2x} \\,dx'} type={'block'} />
            </td>
            <td>
              <></>
            </td>
          </tr>
          <tr>
            <td>
              <Math
                math={'\\frac{3x+1}{x^2+2x} = \\frac{3x+1}{x(x+2)}'}
                type={'block'}
              />
            </td>
            <td>
              <Text type={'block'}>Isolate the fraction out, then factor.</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Math
                math={'\\frac{3x+1}{x(x+2)} = \\frac{A}{x} + \\frac{B}{x+2}'}
                type={'block'}
              />
            </td>
            <td>
              <Text type={'block'}>
                For as many constituent factors of the denominator there exists,
                write each fraction as its own fraction with the numerator
                temporarily substituted with a letter.
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Math
                math={
                  '\\because \\frac{3x+1}{x(x+2)} = \\frac{A}{x} + \\frac{B}{x+2}'
                }
                type={'block'}
              />
              <Math math={'\\therefore A(x+2)+Bx = 3x+1'} type={'block'} />
              <Math math={'\\therefore (A+B)x+2A = 3x+1'} type={'block'} />
            </td>
            <td>
              <Text type={'block'}>
                By fraction laws, we get the following is the numerator and must
                equal to the numerator from our original function. Then rewrite.
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Math math={'\\because (A+B)x+2A = 3x+1'} type={'block'} />
              <Math math={'\\therefore A+B = 3'} type={'block'} />
              <Math math={'\\therefore 2A = 1'} type={'block'} />
              <Math math={'\\because 2A = 1'} type={'block'} />
              <Math math={'\\therefore A = \\frac{1}{2}'} type={'block'} />
              <Math math={'\\therefore B = \\frac{5}{2}'} type={'block'} />
            </td>
            <td>
              <Text type={'block'}>
                Notice the coefficients must match up for this equation to be
                true as well. Thus, we get the following two equations. Then,
                find the values for all the letter respectively.
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Math
                math={
                  '\\frac{3x+1}{x(x+2)} = \\frac{A}{x} + \\frac{B}{x+2} = \\frac{1}{2x} + \\frac{5}{2x+4}'
                }
                type={'block'}
              />
              <Math
                math={'\\int \\frac{1}{2x} + \\frac{5}{2x+4} \\,dx'}
                type={'block'}
              />
            </td>
            <td>
              <Text type={'block'}>
                Substitute the letters back into the fraction, then rewrite our
                original integral.
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Math
                math={
                  '\\int \\frac{1}{2x} + \\frac{5}{2x+4} \\,dx = \\frac{1}{2}\\ln\\lvert x \\rvert + \\frac{5}{2}\\ln\\lvert 2x+4 \\rvert + c'
                }
                type={'block'}
              />
            </td>
            <td>
              <Text type={'block'}>
                Then, integrate as normal, and we get our result.
              </Text>
            </td>
          </tr>
        </table>
      </Example>
    </Section>
  )
}
