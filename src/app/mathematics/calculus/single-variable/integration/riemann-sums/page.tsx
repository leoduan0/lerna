import { List, Math, Rule, Section, Text } from '@/components'

export default function Riemann_Sums() {
  return (
    <Section text="Riemann Sums" level={1}>
      <Text type={'block'}>
        <strong>Riemann Sums</strong> are types of approximations for the
        integral of a function. There are six types of Riemann Sums:
      </Text>
      <List type={'unordered'}>
        <Text type={'block'}>Left</Text>
        <Text type={'block'}>Right</Text>
        <Text type={'block'}>Midpoint</Text>
        <Text type={'block'}>Upper</Text>
        <Text type={'block'}>Lower</Text>
        <Text type={'block'}>Trapezoidal</Text>
      </List>
      <Text type={'block'}>
        For each of the following sums, we divide{' '}
        <Math math={'f(x)'} type={'inline'} /> into an{' '}
        <Math math={'n'} type={'inline'} /> amount of{' '}
        <Math math={'\\Delta x'} type={'inline'} /> bounded by lines{' '}
        <Math math={'x=x_n'} type={'inline'} />.
      </Text>
      <Section text="Left" level={2}>
        <Rule
          level={3}
          statement={
            <Math
              math={'L(n) = \\sum_{i=1}^{n} f(x_{i-1}) \\Delta x_i'}
              type={'block'}
            />
          }
        />
      </Section>
      <Section text="Right" level={2}>
        <Rule
          level={3}
          statement={
            <Math
              math={'L(n) = \\sum_{i=1}^{n} f(x_i) \\Delta x_i'}
              type={'block'}
            />
          }
        />
      </Section>
      <Section text="Midpoint" level={2}>
        <Rule
          level={3}
          statement={
            <Math
              math={
                'L(n) = \\sum_{i=1}^{n} f\\left(\\frac{x_{i-1}+x_i}{2}\\right) \\Delta x_i'
              }
              type={'block'}
            />
          }
        />
      </Section>
      <Section text="Upper" level={2}>
        <Rule
          level={3}
          statement={
            <Math
              math={
                'U(n) = \\sum_{i=1}^{n} (\\sup f([x_{i-1},x_i])) \\Delta x_i'
              }
              type={'block'}
            />
          }
        />
      </Section>
      <Section text="Lower" level={2}>
        <Rule
          level={3}
          statement={
            <Math
              math={
                'L(n) = \\sum_{i=1}^{n} (\\inf f([x_{i-1},x_i])) \\Delta x_i'
              }
              type={'block'}
            />
          }
        />
      </Section>
      <Section text="Trapezoidal" level={2}>
        <Rule
          level={3}
          statement={
            <Math
              math={
                'L(n) = \\sum_{i=1}^{n} \\frac{f(x_{i-1})+f(x_i)}{2} \\Delta x_i'
              }
              type={'block'}
            />
          }
        />
      </Section>
    </Section>
  )
}
