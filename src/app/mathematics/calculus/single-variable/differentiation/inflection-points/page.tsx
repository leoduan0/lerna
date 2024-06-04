import { Math, Section, Text } from '@/components'

export default function Inflection_Points() {
  return (
    <Section text={'Inflection Points'} level={1}>
      <Text type={'block'}>
        For all points where{' '}
        <Math math={'f^{\\prime \\prime}(k) = 0'} type={'inline'} /> or is
        undefined, if the signs of the second derivative just to the left of{' '}
        <Math math={'f^{\\prime \\prime}(k)'} type={'inline'} /> compared to the
        right are different, then <Math math={'k'} type={'inline'} /> is a{' '}
        <strong>point of inflection</strong>.
      </Text>
    </Section>
  )
}
