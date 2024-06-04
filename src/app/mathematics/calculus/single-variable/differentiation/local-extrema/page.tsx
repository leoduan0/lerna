import { List, Math, Section, Text } from '@/components'

export default function Local_Extrema() {
  return (
    <Section text={'Local Extrema'} level={1}>
      <Text type={'block'}>
        At any point where <Math math={'f^{\\prime}(k) = 0'} type={'inline'} />{' '}
        (critical points):
      </Text>
      <List type={'unordered'}>
        <Text type={'block'}>
          If <Math math={'f^{\\prime \\prime}(k) > 0'} type={'inline'} />, then{' '}
          <Math math={'k'} type={'inline'} /> is a{' '}
          <strong>local minimum</strong>.
        </Text>
        <Text type={'block'}>
          If <Math math={'f^{\\prime \\prime}(k) < 0'} type={'inline'} />, then{' '}
          <Math math={'k'} type={'inline'} /> is a{' '}
          <strong>local maximum</strong>.
        </Text>
        <>
          <Text type={'block'}>
            If <Math math={'f^{\\prime \\prime}(k) = 0'} type={'inline'} /> or
            is undefined, then:
          </Text>
          <List type={'unordered'}>
            <Text type={'block'}>
              If <Math math={'f^{\\prime}(x) < 0'} type={'inline'} /> just less
              than <Math math={'k'} type={'inline'} /> while{' '}
              <Math math={'f^{\\prime}(x) > 0'} type={'inline'} /> just greater
              than <Math math={'k'} type={'inline'} />, then{' '}
              <Math math={'k'} type={'inline'} /> is a local minimum.
            </Text>
            <Text type={'block'}>
              If <Math math={'f^{\\prime}(x) > 0'} type={'inline'} /> just less
              than <Math math={'k'} type={'inline'} /> while{' '}
              <Math math={'f^{\\prime}(x) < 0'} type={'inline'} /> just greater
              than <Math math={'k'} type={'inline'} />, then{' '}
              <Math math={'k'} type={'inline'} /> is a local maximum.
            </Text>
            <Text type={'block'}>
              If the sign of <Math math={'f^{\\prime}(x)'} type={'inline'} />{' '}
              just less than <Math math={'k'} type={'inline'} /> and the sign of{' '}
              <Math math={'f^{\\prime}(x)'} type={'inline'} /> just greater than{' '}
              <Math math={'k'} type={'inline'} /> is the same, then{' '}
              <Math math={'k'} type={'inline'} /> is neither a local minimum nor
              maximum.
            </Text>
          </List>
        </>
      </List>
    </Section>
  )
}
