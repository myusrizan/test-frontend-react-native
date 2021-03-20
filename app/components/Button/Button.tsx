import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import debounce from 'lodash/debounce';

interface Props extends TouchableOpacityProps {
  action: any;
  activeOpacity?: number;
  children: React.ReactNode;
}

export default (props: Props) => {
  return (
    <TouchableOpacity
      {...props}
      onPress={debounce(props.action, 1000, {
        leading: true,
        trailing: false,
      })}
      activeOpacity={props.activeOpacity || 0.7}
      disabled={props.disabled || false}>
      {props.children}
    </TouchableOpacity>
  );
};
