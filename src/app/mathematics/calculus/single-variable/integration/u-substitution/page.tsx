import { Example, Math, Section, Text } from '@/components'

export default function U_Substitution() {
  return (
    <Section text="U-Substitution" level={1}>
      <Text type={'block'}>
        Given some function <Math math={'f(x)'} type={'inline'} /> to integrate,
        it&apos;s possible to perform a <strong>u-substitution</strong> to make
        integration easier.
      </Text>
      <Example level={2}>
        <Text type={'block'}>
          To evaluate <Math math={'\\int 2x\\cos(x^2) \\,dx'} type={'inline'} />
          , we can perform u-substitution.
        </Text>
        <table>
          <tr>
            <td>
              <Math math={'\\int 2x\\cos(x^2) \\,dx'} type={'block'} />
            </td>
            <td>
              <></>
            </td>
          </tr>
          <tr>
            <td>
              <Math math={'u = x^2'} type={'block'} />
              <Math math={'du = 2x\\,dx'} type={'block'} />
              <Math
                math={'\\int 2x\\cos(x^2) \\,dx = \\int \\cos(u) \\,du'}
                type={'block'}
              />
            </td>
            <td>
              <Text type={'block'}>
                Set a value for <Math math={'u'} type={'inline'} /> (this value
                could be any value, but often only certain values will make this
                process easier than harder). Then, take the first derivative of{' '}
                <Math math={'u'} type={'inline'} />, and substitute both back
                into the equation.
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Math math={'= \\sin(u) + c'} type={'block'} />
            </td>
            <td>
              <Text type={'block'}>Evaluate the new integral.</Text>
            </td>
          </tr>
          <tr>
            <td>
              <Math math={'= \\sin\\left(x^2\\right) + c'} type={'block'} />
            </td>
            <td>
              <Text type={'block'}>
                Replace <Math math={'u'} type={'inline'} /> with the value it
                was substituting for, and we get our answer.
              </Text>
            </td>
          </tr>
        </table>
      </Example>
    </Section>
  )
}
