import { Example, Math, Section, Text } from '@/components'

export default function Convergence() {
  return (
    <Section text={'Convergent Limits'} level={1}>
      <Text type={'block'}>
        Certain limits at infinities (positive or negative) exist because while
        approaching the limit, the corresponding y value also approaches some
        definite value; they gradually get closer to a certain value, or they{' '}
        <strong>converge</strong>.
      </Text>
      <Example level={2}>
        <Text type={'block'}>
          What is{' '}
          <Math
            math={'\\lim_{x \\to \\infty} \\frac{1}{x}+5'}
            type={'inline'}
          />
          ? The graph of <Math math={'f(x) = \\frac{1}{x}+5'} type={'inline'} />{' '}
          is as follows:
        </Text>
        <iframe
          src="https://www.desmos.com/calculator/urnqlipny0?embed"
          className="h-96 w-full"
        />
        <Text type={'block'}>
          First, we begin by figuring out what the left-hand limit and the
          right-hand limit is.
        </Text>
        <table>
          <tr>
            <th>
              <Text type={'block'}>x</Text>
            </th>
            <td>
              <Text type={'block'}>0</Text>
            </td>
            <td>
              <Text type={'block'}>1</Text>
            </td>
            <td>
              <Text type={'block'}>10</Text>
            </td>
            <td>
              <Text type={'block'}>100</Text>
            </td>
            <td>
              <Text type={'block'}>1000</Text>
            </td>
            <td>
              <Text type={'block'}>10000</Text>
            </td>
          </tr>
          <tr>
            <th>
              <Text type={'block'}>f(x)</Text>
            </th>
            <td>
              <Text type={'block'}>(undefined)</Text>
            </td>
            <td>
              <Text type={'block'}>6</Text>
            </td>
            <td>
              <Text type={'block'}>5.1</Text>
            </td>
            <td>
              <Text type={'block'}>5.01</Text>
            </td>
            <td>
              <Text type={'block'}>5.001</Text>
            </td>
            <td>
              <Text type={'block'}>5.0001</Text>
            </td>
          </tr>
        </table>
        <Text type={'block'}>
          Notice that the limit asks us to approach infinity, but the right-hand
          limit would be non-sensical in this case as approaching infinity from
          some value bigger than infinity is not apt. Thus, we can simply take
          the left-hand limit. When approaching infinity, we take increasingly
          big values for x and analyze their corresponding y values. It is
          apparent from the table above that as x approaches infinity, y
          approaches 5. Such phenomenons, that when the input value approaches
          infinity and its corresponding output value approaches some finite
          number, are called <strong>convergence</strong>. Thus:
        </Text>
        <Text type={'block'}>
          <Math math={'f(x) = \\frac{1}{x}+5'} type={'block'} />
          <Math
            math={'\\because \\lim_{x \\to \\infty^-} f(x) = 5'}
            type={'block'}
          />
          <Math
            math={'\\therefore \\lim_{x \\to \\infty} f(x) = 5'}
            type={'block'}
          />
        </Text>
        <Text type={'block'}>
          Notice that for this particular function, its limit as it approaches{' '}
          <Math math={'-\\infty'} type={'inline'} /> can be found with a similar
          logic too, thus:
        </Text>
        <Math math={'f(x) = \\frac{1}{x}+5'} type={'block'} />
        <Math
          math={'\\because \\lim_{x \\to -\\infty^+} f(x) = 5'}
          type={'block'}
        />
        <Math
          math={'\\therefore \\lim_{x \\to -\\infty} f(x) = 5'}
          type={'block'}
        />
        <Text type={'block'}>
          A limit would not exist if the left-hand and the right-hand limit is
          not equivalent. One possible reason for this is that the function{' '}
          <strong>diverges</strong>.
        </Text>
      </Example>
    </Section>
  )
}
