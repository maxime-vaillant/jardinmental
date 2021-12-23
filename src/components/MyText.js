import * as React from 'react';
import {Platform, Text} from 'react-native';

export default ({
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  bold,
  italic,
  children,
  style,
  ...rest
}) => {
  const s = {fontFamily: 'Karla'};
  return (
    <Text style={[style, s]} {...rest}>
      {children}
    </Text>
  );
};
