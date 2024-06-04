import { Math, Rule, Section, Text } from '@/components'

export default function Critical_Points() {
  return (
    <Section text={'Critical Points'} level={1}>
      <Rule
        level={2}
        statement={
          <Text type={'block'}>
            If <Math math={'f^{\\prime}(x) = 0'} type={'inline'} /> or is
            undefined, then <Math math={'f(x)'} type={'inline'} /> has a{' '}
            <strong>critical point</strong> at{' '}
            <Math math={'x'} type={'inline'} />.
          </Text>
        }
      />
    </Section>
  )
}
