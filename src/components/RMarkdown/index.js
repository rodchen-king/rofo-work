import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './codeBlock';

class RMarkdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    const { source } = this.props;

    return (
      <div>
        <ReactMarkdown
          className="markdown-body"
          source={source}
          escapeHtml={false}
          renderers={{
            code: CodeBlock,
          }}
        />
      </div>
    );
  }
}

export default RMarkdown;
