import { Example, Math, Section, Text } from '@/components'

export default function Implicit_Differentiation() {
  return (
    <Section text={'Implicit Differentiation'} level={1}>
      <Text type={'block'}>
        For some equation in the form of{' '}
        <Math math={'F(x, y)=0'} type={'inline'} />, we say that it is an{' '}
        <strong>implicit function</strong> since the no variable in the equation
        is stated as a function of other terms.
      </Text>
      <Example level={2}>
        <Text type={'block'}>
          Take a unit circle <Math math={'x^2+y^2=1'} type={'inline'} />, what
          is <Math math={'\\frac{dy}{dx}'} type={'inline'} />? The key is to
          find <Math math={'\\frac{dy}{dx}y^2'} type={'inline'} />, which we can
          use the chain rule for:
        </Text>
        <Math
          math={'\\frac{dy}{dx}y^2 = \\frac{d(y^2)}{dy}\\frac{dy}{dx}'}
          type={'block'}
        />
        <Math math={'= 2y\\frac{dy}{dx}'} type={'block'} />
        <Text type={'block'}>
          Thus <Math math={'\\frac{dy}{dx}'} type={'inline'} /> of{' '}
          <Math math={'x^2+y^2=1'} type={'inline'} /> is:
        </Text>
        <Math math={'2x+2y\\frac{dy}{dx}=0'} type={'block'} />
      </Example>
    </Section>
  )
}
