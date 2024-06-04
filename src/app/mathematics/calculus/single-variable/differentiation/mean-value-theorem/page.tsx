import { Math, Section, Text } from '@/components'

export default function Mean_Value_Theorem() {
  return (
    <Section text={'Mean Value Theorem'} level={1}>
      <Text type={'block'}>
        The <strong>mean value theorem</strong> states that for a function{' '}
        <Math math={'f(x)'} type={'inline'} /> that is continuous in the
        interval <Math math={'[a, b]'} type={'inline'} />, then there exists at
        least one number, <Math math={'c'} type={'inline'} />, where{' '}
        <Math
          math={'f^{\\prime}(c) = \\frac{f(b)-f(a)}{b-a}'}
          type={'inline'}
        />
        . In other words, there is at least one point along{' '}
        <Math math={'[a, b]'} type={'inline'} /> of{' '}
        <Math math={'f(x)'} type={'inline'} /> where its derivative is equal to
        the average change of the function in the same interval.
      </Text>
      <Section text={"Rolle's Theorem"} level={2}>
        <Text type={'block'}>
          A special case of the mean value theorem is{' '}
          <strong>Rolle&apos;s theorem</strong>, which states that for a
          function <Math math={'f(x)'} type={'inline'} /> that is continuous in
          the interval <Math math={'[a, b]'} type={'inline'} />, for if{' '}
          <Math math={'f(a)=f(b)'} type={'inline'} />, then there exists at
          least one number <Math math={'c'} type={'inline'} /> in the interval{' '}
          <Math math={'[a, b]'} type={'inline'} /> such that{' '}
          <Math math={'f^{-1}(c)=0'} type={'inline'} />.
        </Text>
      </Section>
    </Section>
  )
}
