import { Example, Math, Rule, Section, Text } from '@/components'

export default function Definite_Integration() {
  return (
    <Section text="Definite Integration" level={1}>
      <Text type={'block'}>
        To find the area of an area bounded by the x-axis, lines{' '}
        <Math math={'x=a'} type={'inline'} /> and{' '}
        <Math math={'x=b'} type={'inline'} />, and the function{' '}
        <Math math={'f(x)'} type={'inline'} /> (commonly referred to as
        &quot;the area under the function&quot;),{' '}
        <strong>definite integration</strong> can be used.
      </Text>
      <Text type={'block'}>
        Definite integration is identical to indefinite integration except that
        we will introduce an <strong>upper bound</strong> and a{' '}
        <strong>lower bound</strong>. Then, using the{' '}
        <strong>fundamental theorem of calculus</strong>, we can evaluate a
        definite integral.
      </Text>
      <Text type={'block'}>
        Given <Math math={'\\int_{a}^{b} f(x) \\,dx'} type={'inline'} />,{' '}
        <Math math={'a'} type={'inline'} /> is the lower bound and{' '}
        <Math math={'b'} type={'inline'} /> is the upper bound.
      </Text>
      <Text type={'block'}>
        The fundamental theorem of calculus is as follows:
      </Text>
      <Rule
        level={2}
        statement={
          <Math
            math={'\\int_{a}^{b} f(x) \\,dx = F(b) - F(a)'}
            type={'block'}
          />
        }
        terms={[
          {
            term: 'a',
            annotation: <Text type={'inline'}>Lower bound</Text>,
          },
          {
            term: 'b',
            annotation: <Text type={'inline'}>Upper bound</Text>,
          },
          {
            term: 'F(b)',
            annotation: (
              <Text type={'inline'}>
                <Math math={'f(x)'} type={'inline'} /> integrated.{' '}
                <Math math={'F(x) = \\int f(x) \\,dx'} type={'inline'} />
              </Text>
            ),
          },
          {
            term: 'F(a)',
            annotation: (
              <Text type={'inline'}>
                <Math math={'f(x)'} type={'inline'} /> integrated.{' '}
                <Math math={'F(x) = \\int f(x) \\,dx'} type={'inline'} />
              </Text>
            ),
          },
        ]}
      />
      <Example level={2}>
        <table>
          <tr>
            <td>
              <Math math={'\\int_{1}^{5} x^3 \\,dx'} type={'block'} />
            </td>
            <td>
              <Text type={'block'}>
                The evaluated form of this integral would give us the area
                bounded by constraints <Math math={'x=1'} type={'inline'} />,{' '}
                <Math math={'x=5'} type={'inline'} />,{' '}
                <Math math={'x^3'} type={'inline'} />, and the x-axis.
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Math math={'\\because f(x) = x^3'} type={'block'} />
              <Math math={'\\therefore F(x) = \\frac{x^4}{4}'} type={'block'} />
            </td>
            <td>
              <Text type={'block'}>
                Find <Math math={'F(x)'} type={'inline'} />.
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Math
                math={
                  '\\int_{1}^{5} x^3 \\,dx = \\left. \\frac{x^4}{4} \\right\\rvert_{1}^{5} = F(5) - F(1) = 156'
                }
                type={'block'}
              />
            </td>
            <td>
              <Text type={'block'}>
                Apply the fundamental theorem of calculus, and we arrive at our
                answer.
              </Text>
            </td>
          </tr>
        </table>
      </Example>
      <Section text="Derivative of Definite Integrals" level={2}>
        <Text type={'block'}>
          Given a function{' '}
          <Math
            math={'f(x) = \\int_{a(x)}^{b(x)} g(x) \\,dx'}
            type={'inline'}
          />
          , its derivative is given by the following.
        </Text>
        <Rule
          level={2}
          statement={
            <Math
              math={
                'f^{\\prime}(x) = \\frac{d}{dx} \\int_{a(x)}^{b(x)} g(x) \\,dx = g(b(x)) \\cdot b^{\\prime}(x) - g(a(x)) \\cdot a^{\\prime}(x)'
              }
              type={'block'}
            />
          }
        />
      </Section>
    </Section>
  )
}
