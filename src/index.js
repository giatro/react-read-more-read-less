import React from 'react';
import PropTypes from 'prop-types';
class ReactReadMoreReadLess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false
        };
    }
    render() {
        const { props } = this;
        const { children, ellipsis, readMoreText, readLessText, readMoreClassName, readLessClassName, readMoreStyle, readLessStyle, charLimit } = props;
        const { showMore } = this.state;
        const shortText = children.substr(0, charLimit) + ellipsis;
        const that = this;
        const ReadMore = () => (charLimit >= children.length ? null : <React.Fragment><a
            href="#"
            className={readMoreClassName}
            role="presentation"
            style={readMoreStyle}
            onClick={(ev) => {
                ev.preventDefault();
                that.setState({showMore: true});
            }}
        >{readMoreText}</a></React.Fragment>);
        const ReadLess = () => (charLimit >= children.length ? null : <a
            href="#"
            className={readLessClassName}
            role="presentation"
            style={readLessStyle}
            onClick={(ev) => {
                ev.preventDefault();
                that.setState({showMore: false});
            }}
        >{readLessText}</a>);
        return (
            <React.Fragment>{showMore ? children : shortText} {showMore ? <ReadLess /> : <ReadMore />}</React.Fragment>
        );
    }
}

ReactReadMoreReadLess.propTypes = {
    charLimit: PropTypes.number,
    ellipsis: PropTypes.string,
    readMoreText: PropTypes.string,
    readLessText: PropTypes.string,
    readMoreClassName: PropTypes.string,
    readLessClassName: PropTypes.string,
    readMoreStyle: PropTypes.object,
    readLessStyle: PropTypes.object,
    children: PropTypes.string.isRequired
};
ReactReadMoreReadLess.defaultProps = {
    charLimit: 150,
    ellipsis: '…',
    readMoreText: 'Read more',
    readLessText: 'Read less',
    readMoreClassName: 'react-read-more-read-less react-read-more-read-less-more',
    readLessClassName: 'react-read-more-read-less react-read-more-read-less-less',
    readMoreStyle: {whiteSpace: "nowrap", textDecoration: "none"},
    readLessStyle: {whiteSpace: "nowrap", textDecoration: "none"}
};
export default ReactReadMoreReadLess;
