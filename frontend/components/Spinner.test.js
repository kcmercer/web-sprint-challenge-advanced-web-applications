// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import {render} from '@testing-library/react'

import Spinner from './Spinner';

test('sanity', () => {
  expect(true).toBe(true)
})

// This seems too simple, but I don't see any other props that Spinner can take
// beyond a boolean. In the Sprint Assessment it referances using a Get request, but
// I don't see why/how I would test that. The spinner just flips on or off.

// I'm going to give it some thought and come back to this.

test('renders without errors', () => {
  render(<Spinner />)
})

test('renders ON without errors', () => {
  render(<Spinner on={true} />)
})

test('renders OFF without errors', () => {
  render(<Spinner on={false} />)
})