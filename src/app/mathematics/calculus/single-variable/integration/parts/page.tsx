import { Example, Math, Rule, Section, Text } from '@/components'

export default function Parts() {
  return (
    <Section text="Parts" level={1}>
      <Text type={'block'}>
        Given an integral <Math math={'\\int u \\,dv'} type={'inline'} />, it
        satisfies the following rule:
      </Text>
      <Rule
        level={2}
        statement={
          <Math math={'\\int u \\,dv = uv - \\int v \\,du'} type={'block'} />
        }
      />
      <Text type={'block'}>
        Thus, given a function <Math math={'f(x)'} type={'inline'} />, one can
        integrate by splitting it into <Math math={'u(x)'} type={'inline'} />{' '}
        and <Math math={'v(x)'} type={'inline'} />.
      </Text>
      <Example level={2}>
        <Text type={'block'}>
          To evaluate <Math math={'\\int x \\sin(x) \\,dx'} type={'inline'} />,
          let us set <Math math={'u(x) = x'} type={'inline'} /> and{' '}
          <Math math={'\\,dv = \\sin(x) \\,dx'} type={'inline'} />. Then,
          according to the rule,{' '}
          <Math
            math={
              '\\int x \\sin(x) \\,dx = \\int u \\,dv = uv - \\int v \\,du = -x\\cos(x) - \\int -\\cos(x) \\,dx'
            }
            type={'inline'}
          />
          . Then, integrate, and we get that it equals to{' '}
          <Math math={'\\sin(x)-x\\cos(x)+c'} type={'inline'} />.
        </Text>
      </Example>
    </Section>
  )
}
