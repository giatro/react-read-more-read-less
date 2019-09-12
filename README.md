
# React Read More Read Less

[![NPM](https://nodei.co/npm/react-read-more-read-less.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-read-more-read-less/)
[![npm version](https://badge.fury.io/js/react-read-more-read-less.svg)](https://badge.fury.io/js/react-read-more-read-less)
![license-isc](https://img.shields.io/github/license/Thamodaran/react-read-more-read-less.svg)

## Install
```
npm install react-read-more-read-less --save

```
## Usage
```js
import ReactReadMoreReadLess from "react-read-more-read-less";

class myComponent extends Component {
    render() {
        return (
            <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {myLongText
            }</ReactReadMoreReadLess>
        );
    }
}
```

## PROPTYPES
| Prop | Type | Default |
| ---- | ---- | ------- |
| charLimit | integer | 150 |
| readMoreText | String | Read more |
| readLessText | String | Read less |
| readMoreClassName | String | react-read-more-read-less-more |
| readLessClassName | String | react-read-more-read-less-less |
| readMoreStyle | object | {whiteSpace: "nowrap"} |
| readLessStyle | object | {whiteSpace: "nowrap"} |
