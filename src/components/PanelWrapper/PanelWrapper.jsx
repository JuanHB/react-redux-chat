import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './PanelWrapper.scss';

class PanelWrapper extends PureComponent {

  constructor(props){
    super(props);

    this.state = { height: 0 };
    this.wrapperElement = React.createRef();

    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.updateStyleHeight = this.updateStyleHeight.bind(this)
  }

  componentDidMount(){
    // update the size on component mount and window resize
    this.updateStyleHeight();
    window.addEventListener('resize', this.updateStyleHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateStyleHeight);
  }

  updateStyleHeight(){
    const { subtractFromHeight } = this.props;
    this.setState({ height: window.innerHeight - (subtractFromHeight || 0)});
  }

  scrollToBottom(){
    this.wrapperElement.current.scrollTop = this.wrapperElement.current.scrollHeight;
  }

  render() {
    return (
      <div
        className="wrapper inner"
        ref={this.wrapperElement}
        style={{ height: this.state.height }}>
        {this.props.children}
      </div>
    );
  }
}

PanelWrapper.propTypes = {
  subtractFromHeight: PropTypes.number
};

export default PanelWrapper;