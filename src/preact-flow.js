// @flow
// @jsx h
import { Component, h } from 'preact';

type Props = {
  a: number
};

class Testing extends Component<Props> {
  render() {
    return <div>{this.props.a}</div>;
  }
}

const cmp = <Testing a={'Not a number'} />;
