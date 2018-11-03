import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Select } from '@auth0/cosmos'

storiesOf('Select').add('simple', () => (
  <Example title="Select: simple">
    <Select
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </Example>
))

storiesOf('Select').add('with placeholder', () => (
  <Example title="Select: with placeholder">
    <Select
      placeholder="Select an option..."
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </Example>
))

storiesOf('Select').add('default value', () => (
  <Example title="Select: with default value">
    <Select
      value={2}
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </Example>
))

storiesOf('Select').add('readonly', () => (
  <Example title="Select: readonly">
    <Select
      readonly
      value={2}
      options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </Example>
))

storiesOf('Select').add('readonly option', () => (
  <Example title="Select: readonly option">
    <Select
      value={3}
      options={[{ text: 'One', value: 1, disabled: true }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
      onChange={event => console.log(event)}
    />
  </Example>
))

storiesOf('Select').add('stressed', () => (
  <Example title="Select: stressed - 56 characters with 300px width">
    <Select
      value={1}
      style={{ width: 300 }}
      options={[
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          value: 1
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          value: 2
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          value: 3
        }
      ]}
      onChange={event => console.log(event)}
    />
  </Example>
))
