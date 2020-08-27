var React = require('react/addons');

// COMPONENTS
var Page = require('../Page.jsx');
var Section = require('../Section.jsx');
var TextBlock = require('../TextBlock.jsx');

var App = React.createClass({
  render: function() {
    return (
      <Page title='Page title'>
        <Section title='Section title'>
          <TextBlock>
            <p>Text goes here</p>
          </TextBlock>
          <TextBlock>
            <p>Text goes here</p>
          </TextBlock>
        </Section>
        <this.props.activeRouteHandler />
      </Page>
    );
  }
});

module.exports = App;