import React from 'react';

class Link extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { idyll, hasError, updateProps, ...props } = this.props;
    let passProps = { ...props };
    if (passProps.url) {
      passProps.href = passProps.url;
    }
    return <a {...passProps}>{props.text || props.children}</a>;
  }
}

Link._idyll = {
  name: 'Link',
  tagType: 'closed',
  displayType: 'inline',
  props: [
    {
      name: 'text',
      type: 'string',
      example: '"Link Text"',
      description: 'The text to display'
    },
    {
      name: 'url',
      type: 'string',
      example: '"https://some.url/"',
      description: 'The URL to open when the link is clicked'
    }
  ]
};

export default Link;
