import React from 'react'

// declare module 'react-option' {
  export type OptionProps = {
    children: OptionChildren;
    value: boolean;
  };
  export type OptionChild = typeof Some | typeof None | typeof Option;
  export type OptionChildren = OptionChild | OptionChild[];
  type SomeProps = {
    _optionType: '[Option: Some]';
  }

  type NoneProps = {
    _optionType: '[Option: None]';
  }
  //function Some(props: SomeProps): React.ReactNode;
  //function None(props: NoneProps): React.ReactNode;
  export const Some: React.FC<SomeProps>;
  export const None: React.FC<NoneProps>;
  function Option(props: OptionProps): React.ReactNode;
//}
