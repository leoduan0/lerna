import { Align, List, Math, Rule, Section, Text } from '@/components'

export default function Integration() {
  return (
    <Section text="Integration" level={1}>
      <Text type={'block'}>
        In essence, an integral aims to find the total area beneath a given
        function. The definition of an integral is as follows:
      </Text>
      <Align type={'center'}>
        <Math
          math={'\\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i)\\Delta x'}
          type={'block'}
        />
      </Align>
      <Text type={'block'}>
        Integration is also referred to as antidifferentiation, since if the
        integration of <Math math={'f(x)'} type={'inline'} /> is{' '}
        <Math math={'F(x)'} type={'inline'} />, then the first derivative of{' '}
        <Math math={'F(x)'} type={'inline'} /> is{' '}
        <Math math={'f(x)'} type={'inline'} />.
      </Text>
      <Section text="Rules" level={1}>
        <Rule
          level={2}
          statement={
            <>
              <Math
                math={
                  '\\int (f(x) \\pm g(x)) \\,dx = \\int f(x) \\,dx \\pm \\int g(x) \\,dx'
                }
                type={'block'}
              />
              <Math
                math={'\\int kf(x) \\,dx = k\\int f(x) \\,dx'}
                type={'block'}
              />
              <Math math={'\\int_{a}^{a} f(x) \\,dx = 0'} type={'block'} />
              <Math
                math={'\\int_{a}^{b} f(x) \\,dx = -\\int_{b}^{a} f(x) \\,dx'}
                type={'block'}
              />
              <Math
                math={
                  '\\int_{a}^{b} f(x) \\,dx = \\int_{a}^{c} f(x) \\,dx + \\int_{c}^{b} f(x) \\,dx'
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
              <Math
                math={'\\int k f(x) \\,dx = k\\int_{}^{} f(x) \\,dx'}
                type={'block'}
              />
              <Math
                math={
                  '\\int (f(x) \\pm g(x)) \\,dx = \\int_{}^{} f(x) \\,dx \\pm \\int_{}^{} g(x) \\,dx'
                }
                type={'block'}
              />
              <Math
                math={'\\int x^k \\,dx = \\frac{x^{k+1}}{k+1}+c, k \\ne -1'}
                type={'block'}
              />
              <Math
                math={'\\int \\frac{1}{x} \\,dx = \\ln|x|+c'}
                type={'block'}
              />
              <Math
                math={'\\int \\sin(x) \\,dx = -\\cos(x)+c'}
                type={'block'}
              />
              <Math math={'\\int \\cos(x) \\,dx = \\sin(x)+c'} type={'block'} />
              <Math
                math={
                  '\\int \\tan(x) \\,dx = \\ln|\\sec(x)|+c = -\\ln|\\cos(x)|+c'
                }
                type={'block'}
              />
              <Math
                math={'\\int \\csc(x) \\,dx = -\\ln|\\csc(x)|+\\cot(x)|+c'}
                type={'block'}
              />
              <Math
                math={'\\int \\sec(x) \\,dx = \\ln|\\sec(x)+\\tan(x)|+c'}
                type={'block'}
              />
              <Math
                math={
                  '\\int \\cot(x) \\,dx = \\ln|\\sin(x)|+c = -\\ln|\\csc(x)|+c'
                }
                type={'block'}
              />
              <Math
                math={'\\int \\csc^2(x) \\,dx = -\\cot(x)+c'}
                type={'block'}
              />
              <Math
                math={'\\int \\sec^2(x) \\,dx = \\tan(x)+c'}
                type={'block'}
              />
              <Math
                math={'\\int \\cot^2(x) \\,dx = -\\cot(x)-x+c'}
                type={'block'}
              />
              <Math
                math={'\\int \\sec(x) \\tan(x) \\,dx = \\sec(x)+c'}
                type={'block'}
              />
              <Math
                math={'\\int \\csc(x) \\tan(x) \\,dx = -\\csc(x)+c'}
                type={'block'}
              />
              <Math
                math={'\\int \\frac{c}{ax+b} \\,dx = \\frac{c}{a} \\ln|ax+b|+c'}
                type={'block'}
              />
              <Math
                math={'\\int \\ln(x) \\,dx = x\\ln(x)-x+c'}
                type={'block'}
              />
              <Math
                math={
                  '\\int \\frac{1}{k^2+x^2} \\,dx = \\frac{1}{k}\\tan^{-1}\\left(\\frac{x}{a}\\right)+c'
                }
                type={'block'}
              />
              <Math
                math={
                  '\\int \\frac{1}{\\sqrt{k^2-x^2}} \\,dx = \\sin^{-1}\\left(\\frac{x}{a}\\right)+c'
                }
                type={'block'}
              />
              <Math
                math={'\\int k^x \\,dx = \\frac{k^x}{\\ln(k)}+c'}
                type={'block'}
              />
              <Math
                math={'\\int \\frac{1}{x\\sqrt{x^2-1}} \\,dx = \\sec^{-1}|x|+c'}
                type={'block'}
              />
              <Math math={'\\int e^x \\,dx = e^x+c'} type={'block'} />
              <Math
                math={'\\int \\ln(x) \\,dx = x\\ln(x)-x+c'}
                type={'block'}
              />
            </List>
          }
        />
      </Section>
      <Section text="Particular and General Solutions" level={2}>
        <Text type={'block'}>
          From the rules above we find that the derivative of any constant is 0.
          Thus, it is not possible to always integrate{' '}
          <Math math={'f(x)'} type={'inline'} /> back into the original{' '}
          <Math math={'F(x)'} type={'inline'} />. Therefore, we say that an
          integration which this is true is a <strong>general solution</strong>,
          where as an integration of <Math math={'f(x)'} type={'inline'} />,
          using various techniques, yields the original{' '}
          <Math math={'F(x)'} type={'inline'} />, is a{' '}
          <strong>particular solution</strong>.
        </Text>
      </Section>
    </Section>
  )
}
