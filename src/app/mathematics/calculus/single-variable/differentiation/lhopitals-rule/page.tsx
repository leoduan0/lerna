import { Align, List, Math, Section, Text } from '@/components'

export default function LHopitals_Rule() {
  return (
    <Section text={"L'Hôpital's Rule"} level={1}>
      <Text type={'block'}>
        <strong>L&apos;Hôpital&apos;s Rule</strong> states that:
      </Text>
      <Align type={'center'}>
        <Math
          math={
            '\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f^{\\prime}(x)}{g^{\\prime}(x)}'
          }
          type={'block'}
        />
      </Align>
      <Text type={'block'}>
        L&apos;Hôpital&apos;s rule only works if direct substitution results in
        any of the following <strong>indeterminate forms</strong> and would not
        necessarily yield the correct result if otherwise:
      </Text>
      <List type={'unordered'}>
        <Math math={'\\frac{0}{0}'} type={'inline'} />
        <Math math={'\\frac{\\infty}{\\infty}'} type={'inline'} />
        <Math math={'0 \\times \\infty'} type={'inline'} />
        <Math math={'\\infty - \\infty'} type={'inline'} />
        <Math math={'0^0'} type={'inline'} />
        <Math math={'1^\\infty'} type={'inline'} />
        <Math math={'\\infty^0'} type={'inline'} />
      </List>
    </Section>
  )
}
