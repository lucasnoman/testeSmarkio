import React from 'react';

import { Buttons } from './styles.js';

export default function Button(props) {
  return <Buttons>{props.children}</Buttons>;
}
