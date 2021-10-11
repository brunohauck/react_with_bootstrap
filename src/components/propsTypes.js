import React from "react";
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const name = this.props.name;
    return (
      <div>
        Meu nome é {this.props.name} !
      </div>
    );
  }
}

MyComponent.propTypes = {
  name: 'Bruno Hauck'
};
export default MyComponent;
