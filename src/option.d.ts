import React from 'react'

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

export const Some: React.FC<SomeProps>;
export const None: React.FC<NoneProps>;
export const Option: React.FC<OptionProps>;

