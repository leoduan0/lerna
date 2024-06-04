import { List, Math, Section, Text } from '@/components'

export default function Global_Extrema() {
  return (
    <Section text={'Global Extrema'} level={1}>
      <Text type={'block'}>
        Let <Math math={'S'} type={'inline'} /> contain all values of{' '}
        <Math math={'k'} type={'inline'} /> such that{' '}
        <Math math={'f^{\\prime}(k) = 0'} type={'inline'} /> on the interval{' '}
        <Math math={'[a, b]'} type={'inline'} />, along with{' '}
        <Math math={'a'} type={'inline'} /> and{' '}
        <Math math={'b'} type={'inline'} />. On the interval{' '}
        <Math math={'[a, b]'} type={'inline'} />:
      </Text>
      <List type={'unordered'}>
        <Text type={'block'}>
          If the minimum value for <Math math={'f(x)'} type={'inline'} /> for
          all numbers in <Math math={'S'} type={'inline'} /> is{' '}
          <Math math={'f(k)'} type={'inline'} />, then{' '}
          <Math math={'k'} type={'inline'} /> is a global minimum.
        </Text>
        <Text type={'block'}>
          If the maximum value for <Math math={'f(x)'} type={'inline'} /> for
          all numbers in <Math math={'S'} type={'inline'} /> is{' '}
          <Math math={'f(k)'} type={'inline'} />, then{' '}
          <Math math={'k'} type={'inline'} /> is a global maximum.
        </Text>
      </List>
    </Section>
  )
}
