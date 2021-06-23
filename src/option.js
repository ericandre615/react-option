import React from 'react';

const OPTION_TYPES = {
  SOME: '[Option: Some]',
  NONE: '[Option: None]',
};

export const Some = ({ children }) => {
  return <>{ children }</>;
};

Some.defaultProps = {
 _optionType: OPTION_TYPES.SOME,
}

export const None = ({ children }) => {
  return <>{ children }</>;
};

None.defaultProps = {
 _optionType: OPTION_TYPES.NONE,
}

const findChildrenBy = childType => children => React.Children
  .toArray(children)
  .find(child => (child.props._optionType === childType))
const isSome = findChildrenBy(OPTION_TYPES.SOME);
const isNone = findChildrenBy(OPTION_TYPES.NONE);

export const Option = ({ children, value }) => {
    if (value === true) {
        const SomeComponent = isSome(children);
        return SomeComponent || null;
    }

    const NoneComponent = isNone(children);
    return NoneComponent || null;
}

export default {
  Some,
  None,
  Option
};
