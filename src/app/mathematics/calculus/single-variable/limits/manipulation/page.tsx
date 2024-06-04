import { Example, Math, Section, Text } from '@/components'

export default function Manipulation() {
  return (
    <Section text={'Limits by Manipulation'} level={1}>
      <Text type={'block'}>
        Certain limits may appear undefined at first, but with some
        manipulation, it would still be possible to find the limit.
      </Text>
      <Example level={2}>
        <Text type={'block'}>
          Find whether{' '}
          <Math
            math={'\\lim_{x \\to -3} \\frac{3x^3+9x^2+13x+12}{x+3}'}
            type={'inline'}
          />{' '}
          exists, and if so, what it is.
        </Text>
        <Text type={'block'}>
          At first glance, it may appear as if this limit does not exist as
          direct substitution would yield a 0 in the denominator. However, we
          can manipulate this function so that direct substitution would not
          yield a 0 in the denominator. In this case, we can simply divide the
          two polynomials, resulting in:
        </Text>
        <Math math={'\\lim_{x \\to -3} 2x^2+3x+4'} type={'block'} />
        <Text type={'block'}>
          And then, we can substitue -3 directly into the function as input to
          acquire the limit, thus:
        </Text>
        <Math
          math={'\\lim_{x \\to -3} \\frac{3x^3+9x^2+13x+12}{x+3} = 13'}
          type={'block'}
        />
      </Example>
    </Section>
  )
}
