# React Option Component

A simple component to make more declarative condtional rendering. It exports 3 components
that are used together. 

- `Option`
- `Some`
- `None`

The `Option` component wraps `Some` and ~`None` components. It takes a single prop `value`
which evaluates to `true` or `false`. If the `value` prop evaluates to `true` then the `Some`
component including all it's children are rendered. If the `value` prop evaluates to `false`
then the `None` component and all it's children are rendered.

Currently the `Option` component will only use the first `Some` or `None` component it finds. However
you can nest ~`Option` components inside other ~`Option`, `Some`, or `None` components.

Note that you could have only a `Some` component and if `value` prop evaluates to `false` then 
it will return `null` and nothing will be rendered.

### Basic Usage Examples

```
import { Option, Some, None } from 'react-option';

const TestComponent = (props) => (
  <div>
    <Option value={ props.shouldRender() }>
      <Some>
        <p>I will be rendered if props.shouldRender return true</p>
      </Some>
      <None>
        <p>Or I will be rendered if props.shouldRender returns false</p>
      </None>
    </Option>
  </div>
)
```

Nested Options

```
import { Option, Some, None } from 'react-option'

const TestComponent = (props) => (
  <div>
    <Option value={ props.shouldRender() }>
      <Some>
        <p>Should render</p>
        <Option value={ props.someOtherCondition() }>
          <Some>
            <p> should render if both are true</p>
          </Some>
          <None>
            <p> Should render if first is true and second is false</p>
          </None>
        <Option>
      </Some>
      <None>
        <p>Should not render</p>
      </None>
    </Option>
  </div>
)
```


