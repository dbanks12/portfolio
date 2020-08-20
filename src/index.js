import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Section extends React.Component {
  render() {
    return (
      <div class="section">
        <h1>{this.props.heading}</h1>
        <ul>
          {this.props.lines.map((line, index) =>
            <li key={index}><a href={line.url}>{line.alias}</a></li>
          )}
        </ul>
      <hr></hr>
      </div>
    );
  }
}

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.title = "David Joshua Banks";
    this.subtitle = "Software and Electrical Engineer";
    this.section_contents = [
      {
        heading: "GitHub",
        lines: [
          {url: "https://github.com/dbanks12", alias: "github.com/dbanks12"},
        ],
      },
      {
        heading: "LinkedIn",
        lines: [
          {url: "https://www.linkedin.com/in/david-j-banks", alias: "LinkedIn.com/in/David-J-Banks"},
        ],
      },
      {
        heading: "Current Employer",
        lines: [
          {url: "https://www.geontech.com", alias: "Geon Technologies, LLC"},
        ],
      },
      {
        heading: "Previous Employers",
        lines: [
          {url: "https://www.bia-boeing.com", alias: "Boeing Intelligence & Analytics"},
          {url: "http://www.future-skies.com", alias: "Future Skies, Inc"},
        ],
      },

    ];
  }
  render() {
    const sections = this.section_contents.map((elem, index) =>
        <Section
          heading={elem.heading}
          lines={elem.lines}
        />
    );

    return (
      <div class="body">
        <div class="header">
          <h1>{this.title}</h1>
          <p>{this.subtitle}</p>
        </div>
        {sections}
      </div>
    );
  }
}

// ========================================
ReactDOM.render(
  <Top />,
  document.getElementById('root')
);
