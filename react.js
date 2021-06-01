'use strict';


const e = React.createElement;

class ReactButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
    )
  }
}

const domContainer = document.querySelector('.ReactButton');
ReactDOM.render(e(ReactButton), domContainer);