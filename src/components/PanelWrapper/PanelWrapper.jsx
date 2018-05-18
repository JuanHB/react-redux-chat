import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
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
    this.scrollToBottom();
    window.addEventListener('resize', this.updateStyleHeight);
  }

  componentDidUpdate(){
    this.scrollToBottom();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateStyleHeight);
  }

  updateStyleHeight(){
    const { subtractFromHeight } = this.props;
    this.setState({ height: window.innerHeight - (subtractFromHeight || 0)});
  }

  scrollToBottom(){
    if(this.props.scrollToBottom){
      this.wrapperElement.current.scrollTop = this.wrapperElement.current.scrollHeight;
    }
  }

  render() {

    const { paper } = this.props.muiTheme;
    const style = {
      height: this.state.height ,
      color: paper.color,
      backgroundColor: paper.backgroundColor
    };

    return (
      <div
        className='wrapper inner'
        ref={this.wrapperElement}
        style={style}>
        {this.props.children}
      </div>
    );
  }
}

PanelWrapper.propTypes = {
  subtractFromHeight: PropTypes.number,
  scrollToBottom: PropTypes.bool
};

export default muiThemeable()(PanelWrapper);