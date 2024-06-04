import { Align, List, Math, Rule, Section, Text } from '@/components'

export default function Differentiation() {
  return (
    <Section text={'Differentiation'} level={1}>
      <Text type={'block'}>
        In essence, a <strong>derivative</strong> aims to find the exact slope
        of a function at a certain point. The slope equation is{' '}
        <Math
          math={'\\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1}'}
          type={'inline'}
        />{' '}
        can help us do that, but as long as{' '}
        <Math math={'\\Delta x \\neq 0'} type={'inline'} /> then the slope
        equation would not yield the exact slope at that point, but a rough
        estimate. It is obvious that we cannot directly use the slope equation
        with <Math math={'\\Delta x = 0'} type={'inline'} />, but we can get
        infinitely close to it using limits. Thus, the definition of a
        derivative is as follows:
      </Text>
      <Align type={'center'}>
        <Math
          math={
            '\\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x)-f(x)}{\\Delta x}'
          }
          type={'block'}
        />
      </Align>
      <Text type={'block'}>
        Notice that <Math math={'f(x+\\Delta x)-f(x)'} type={'inline'} /> is,
        essentially, <Math math={'\\Delta y'} type={'inline'} /> with the limit
        taken into account.
      </Text>
      <Rule
        level={2}
        statement={
          <>
            <Math math={'\\frac{d}{dx} x^n = nx^{n-1}'} type={'block'} />
            <Math
              math={
                '\\frac{d}{dx} f(x)g(x) = f^{\\prime}(x)g(x)+f(x)g^{\\prime}(x)'
              }
              type={'block'}
            />
            <Math
              math={
                '\\frac{d}{dx} \\frac{f(x)}{g(x)} = \\frac{f^{\\prime}(x)g(x)-f(x)g^{\\prime}(x)}{g^2(x)}'
              }
              type={'block'}
            />
            <Math
              math={'\\frac{d}{dx} f(g(x)) = f^{\\prime}(g(x))g^{\\prime}(x)'}
              type={'inline'}
            />
            <Math
              math={
                '\\frac{d}{dx} f(x) \\pm g(x) = \\frac{d}{dx} f(x) \\pm \\frac{d}{dx} g(x)'
              }
              type={'block'}
            />
          </>
        }
      />
      <Rule
        level={2}
        statement={
          <List type={'unordered'}>
            <Math math={'\\frac{d}{dx} k = 0'} type={'block'} />
            <Math
              math={'\\frac{d}{dx} kf(x) = k\\frac{d\\left(f(x)\\right)}{dx}'}
              type={'block'}
            />
            <Math math={'\\frac{d}{dx} \\sin(x) = \\cos(x)'} type={'block'} />
            <Math math={'\\frac{d}{dx} \\cos(x) = -\\sin(x)'} type={'block'} />
            <Math math={'\\frac{d}{dx} \\tan(x) = \\sec^2(x)'} type={'block'} />
            <Math
              math={'\\frac{d}{dx} \\sec(x) = \\sec(x)\\tan(x)'}
              type={'block'}
            />
            <Math
              math={'\\frac{d}{dx} \\csc(x) = -\\csc(x)\\cot(x)'}
              type={'block'}
            />
            <Math
              math={'\\frac{d}{dx} \\cot(x) = -\\csc^2(x)'}
              type={'block'}
            />
            <Math
              math={'\\frac{d}{dx} \\sin^{-1}(x) = \\frac{1}{\\sqrt{1-x^2}}'}
              type={'block'}
            />
            <Math
              math={'\\frac{d}{dx} \\cos^{-1}(x) = -\\frac{1}{\\sqrt{1-x^2}}'}
              type={'block'}
            />
            <Math
              math={'\\frac{d}{dx} \\tan^{-1}(x) = \\frac{1}{1+x^2}'}
              type={'block'}
            />
            <Math
              math={
                '\\frac{d}{dx} \\csc^{-1}(x) = -\\frac{1}{|x|\\sqrt{x^2-1}}'
              }
              type={'block'}
            />
            <Math
              math={'\\frac{d}{dx} \\sec^{-1}(x) = \\frac{1}{|x|\\sqrt{x^2-1}}'}
              type={'block'}
            />
            <Math
              math={'\\frac{d}{dx} \\cot^{-1}(x) = -\\frac{1}{1+x^2}'}
              type={'block'}
            />
            <Math math={'\\frac{d}{dx} k^x = k^x\\ln(a)'} type={'block'} />
            <Math math={'\\frac{d}{dx} e^x = e^x'} type={'block'} />
            <Math
              math={'\\frac{d}{dx} \\ln(x) = \\frac{1}{x}'}
              type={'block'}
            />
            <Math
              math={'\\frac{d}{dx} \\log_a (x) = \\frac{1}{x\\ln(a)}'}
              type={'block'}
            />
          </List>
        }
      />
      <Section text={'Parametric Functions'} level={2}>
        <Text type={'block'}>
          Given some parametric equations{' '}
          <Math math={'x=f(t)'} type={'inline'} /> and{' '}
          <Math math={'y=f(t)'} type={'inline'} />, then:
        </Text>
        <Align type={'center'}>
          <Math
            math={'\\frac{dy}{dx}=\\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}}'}
            type={'block'}
          />
        </Align>
      </Section>
      <Section text={'Derivatives of Inverse Functions'} level={2}>
        <Text type={'block'}>
          If the derivative of <Math math={'f(x)'} type={'inline'} /> at{' '}
          <Math math={'(a, b)'} type={'inline'} /> is{' '}
          <Math math={'k'} type={'inline'} />, then the derivative of{' '}
          <Math math={'f^{-1}(x)'} type={'inline'} /> at{' '}
          <Math math={'(b, a)'} type={'inline'} /> is{' '}
          <Math math={'k^{-1}'} type={'inline'} />.
        </Text>
      </Section>
    </Section>
  )
}
