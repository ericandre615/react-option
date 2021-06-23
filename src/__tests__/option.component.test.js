import React from 'react';
import { render } from '@testing-library/react';

import {
    Some,
    None,
    Option,
} from '../option';

describe('Option Component', () => {
    it('should return children of Some when value prop evaluates to `true`', () => {
        const shouldRender = true;
        const { container: renderedOption, asFragment } = render(
            <Option value={ shouldRender }>
                <Some>
                    <div id="some">
                        <p>I am some content</p>
                    </div>
                </Some>
                <None>
                    <div id="none">
                        <p>I am none content</p>
                    </div>
                </None>
            </Option>
        )

        const renderedSome = renderedOption.querySelector('#some');
        const renderedNone = renderedOption.querySelector('#none');

        expect(renderedSome).toBeTruthy();
        expect(renderedNone).toBeFalsy();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should return children of None when value prop evaluates to `false`', () => {
        const shouldRender = false;
        const { container: renderedOption, asFragment } = render(
            <Option value={ shouldRender }>
              <Some>
                  <div id="some">
                      <p>I am some content</p>
                  </div>
              </Some>
              <None>
                  <div id="none">
                      <p>I am none content</p>
                  </div>
              </None>
            </Option>
        )

        const renderedSome = renderedOption.querySelector('#some');
        const renderedNone = renderedOption.querySelector('#none');

        expect(renderedSome).toBeFalsy();
        expect(renderedNone).toBeTruthy();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should handle nested Options child Somes', () => {
        const shouldRender = true;
        const shouldRenderChildOption = true
        const { container: renderedOption, asFragment } = render(
            <Option value={ shouldRender }>
              <Some>
                  <div id="some">
                      <p>I am some content</p>
                  </div>
                  <Option value={ shouldRenderChildOption }>
                      <Some>
                        <div id="some-child">
                          <p>I am some child content</p>
                        </div>
                      </Some>
                      <None>
                        <div id="none-child">
                          <p>I am none child content</p>
                        </div>
                      </None>
                  </Option>
              </Some>
              <None>
                  <div id="none">
                      <p>I am none content</p>
                  </div>
              </None>
            </Option>
        )

        const renderedSome = renderedOption.querySelector('#some');
        const renderedSomeChild = renderedOption.querySelector('#some-child');
        const renderedNone = renderedOption.querySelector('#none');
        const renderedNoneChild = renderedOption.querySelector('#none-child');

        expect(renderedSome).toBeTruthy();
        expect(renderedNone).toBeFalsy();
        expect(renderedSomeChild).toBeTruthy();
        expect(renderedNoneChild).toBeFalsy();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should handle nested Options multiple None', () => {
        const shouldRender = false;
        const shouldRenderChildOption = false
        const { container: renderedOption, asFragment } = render(
            <Option value={ shouldRender }>
              <Some>
                  <div id="some">
                      <p>I am some content</p>
                  </div>
              </Some>
              <None>
                  <div id="none">
                      <p>I am none content</p>
                  </div>
                  <Option value={ shouldRenderChildOption }>
                      <Some>
                        <div id="some-child">
                          <p>I am some child content</p>
                        </div>
                      </Some>
                      <None>
                        <div id="none-child">
                          <p>I am none child content</p>
                        </div>
                      </None>
                  </Option>
              </None>
            </Option>
        )

        const renderedSome = renderedOption.querySelector('#some');
        const renderedSomeChild = renderedOption.querySelector('#some-child');
        const renderedNone = renderedOption.querySelector('#none');
        const renderedNoneChild = renderedOption.querySelector('#none-child');

        expect(renderedSome).toBeFalsy();
        expect(renderedNone).toBeTruthy();
        expect(renderedSomeChild).toBeFalsy();
        expect(renderedNoneChild).toBeTruthy();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should handle nested Options None in Some', () => {
        const shouldRender = true;
        const shouldRenderChildOption = false
        const { container: renderedOption, asFragment } = render(
            <Option value={ shouldRender }>
              <Some>
                  <div id="some">
                      <p>I am some content</p>
                  </div>
                  <Option value={ shouldRenderChildOption }>
                      <Some>
                        <div id="some-child">
                          <p>I am some child content</p>
                        </div>
                      </Some>
                      <None>
                        <div id="none-child">
                          <p>I am none child content</p>
                        </div>
                      </None>
                  </Option>
              </Some>
              <None>
                  <div id="none">
                      <p>I am none content</p>
                  </div>
              </None>
            </Option>
        )

        const renderedSome = renderedOption.querySelector('#some');
        const renderedSomeChild = renderedOption.querySelector('#some-child');
        const renderedNone = renderedOption.querySelector('#none');
        const renderedNoneChild = renderedOption.querySelector('#none-child');

        expect(renderedSome).toBeTruthy();
        expect(renderedNone).toBeFalsy();
        expect(renderedSomeChild).toBeFalsy();
        expect(renderedNoneChild).toBeTruthy();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should handle nested Options Some in None', () => {
        const shouldRender = false;
        const shouldRenderChildOption = true
        const { container: renderedOption, asFragment } = render(
            <Option value={ shouldRender }>
              <Some>
                  <div id="some">
                      <p>I am some content</p>
                  </div>
              </Some>
              <None>
                  <div id="none">
                      <p>I am none content</p>
                  </div>
                  <Option value={ shouldRenderChildOption }>
                      <Some>
                        <div id="some-child">
                          <p>I am some child content</p>
                        </div>
                      </Some>
                      <None>
                        <div id="none-child">
                          <p>I am none child content</p>
                        </div>
                      </None>
                  </Option>
              </None>
            </Option>
        )

        const renderedSome = renderedOption.querySelector('#some');
        const renderedSomeChild = renderedOption.querySelector('#some-child');
        const renderedNone = renderedOption.querySelector('#none');
        const renderedNoneChild = renderedOption.querySelector('#none-child');

        expect(renderedSome).toBeFalsy();
        expect(renderedNone).toBeTruthy();
        expect(renderedSomeChild).toBeTruthy();
        expect(renderedNoneChild).toBeFalsy();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render nothing if no None and value evalutes to `false`', () => {
        const shouldRender = false;
        const { container: renderedOption, asFragment } = render(
            <Option value={ shouldRender }>
              <Some>
                  <div id="some">
                      <p>I am some content</p>
                  </div>
              </Some>
            </Option>
        )

        const renderedSome = renderedOption.querySelector('#some');
        const renderedNone = renderedOption.querySelector('#none');

        expect(renderedSome).toBeFalsy();
        expect(renderedNone).toBeFalsy();

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render nothing if no Some and value evalutes to `true`', () => {
        const shouldRender = true;
        const { container: renderedOption, asFragment } = render(
            <Option value={ shouldRender }>
              <None>
                <div id="none">
                  <p>I am none component</p>
                </div>
              </None>
            </Option>
        )

        const renderedSome = renderedOption.querySelector('#some');
        const renderedNone = renderedOption.querySelector('#none');

        expect(renderedSome).toBeFalsy();
        expect(renderedNone).toBeFalsy();

        expect(asFragment()).toMatchSnapshot();
    });

    it('should match snapshot when value is `true`', () => {
      const shouldRender = true;
      const { asFragment } = render(
        <Option value={ shouldRender }>
          <Some>
              <div id="some">
                  <p>I am some content</p>
              </div>
          </Some>
          <None>
              <div id="none">
                  <p>I am none content</p>
              </div>
          </None>
        </Option>
      );

      const { firstChild: renderedOption } = asFragment();

      expect(renderedOption).toMatchSnapshot();
    });


    it('should match snapshot when value is `false`', () => {
      const shouldRender = false;
      const { asFragment } = render(
        <Option value={ shouldRender }>
          <Some>
              <div id="some">
                  <p>I am some content</p>
              </div>
          </Some>
          <None>
              <div id="none">
                  <p>I am none content</p>
              </div>
          </None>
        </Option>
      );

      const { firstChild: renderedOption } = asFragment();

      expect(renderedOption).toMatchSnapshot();
    });
});
