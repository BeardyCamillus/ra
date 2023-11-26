/* eslint-disable react/prop-types */
import React from "react";
import Popular from '../components/Popular';
import New from '../components/New';

function withChangesStyle(Component) {
  return class ClassComponent extends React.Component {
    render() {
      if (this.props.views > 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        )
      }

      if (this.props.views < 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        )
      }

      return <Component {...this.props} />
    }
  }
}

export default withChangesStyle;