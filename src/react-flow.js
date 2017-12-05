// @flow
import React from 'react';

type Props = {
  a: number
};

class Testing extends React.Component<Props> {
  render() {
    return <div>{this.props.a}</div>;
  }
}

const cmp = <Testing a={'Not a number'}/>;
