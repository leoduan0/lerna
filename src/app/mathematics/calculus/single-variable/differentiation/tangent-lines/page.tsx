import { Math, Rule, Section, Text } from '@/components'

export default function Tangent_Lines() {
  return (
    <Section text={'Tangent Lines'} level={1}>
      <Rule
        level={2}
        statement={
          <Text type={'block'}>
            The tangent line of <Math math={'f(x)'} type={'inline'} /> when{' '}
            <Math math={'x=a'} type={'inline'} /> is given by{' '}
            <Math
              math={'y - f(a) = f^{\\prime}(x) \\cdot (x - a)'}
              type={'inline'}
            />
          </Text>
        }
      />
    </Section>
  )
}
