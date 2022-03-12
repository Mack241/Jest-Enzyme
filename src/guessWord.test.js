import React from 'react'
import { mount } from 'enzyme'

import App from './App'
import { findByTestAttr } from '../test/testUtils'

const setup = (state = {}) => {

  const wrapper = mount(<App />)

  const inputBox = findByTestAttr(wrapper, 'input-box')
  inputBox.simulate('change', { target: { value: 'train' } })

  const submitButton = findByTestAttr(wrapper, 'submit-button')
  submitButton.simulate('click', { preventDefault() {} })

  return wrapper
}

describe('invaid word guess', () => {
  test.todo('guessedWords table dows not get another row')
})

describe.skip('no words guessed', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: []
    })
  })

  test('creates a GuessedWords table with one row', () => {
    const guessWordRows = findByTestAttr(wrapper, 'guessed-word')
    expect(guessWordRows).toHaveLength(1)
  })
})

describe.skip('some words guessed', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [
        {guessedWord: 'plain', letterMatchCount: 2},
        {guessedWord: 'pat', letterMatchCount: 3}
      ]
    })
  })

  test('creates a GuessedWords table with 3 rows', () => {
    const guessWordRows = findByTestAttr(wrapper, 'guessed-word')
    expect(guessWordRows).toHaveLength(3) 
  })
})

describe.skip('guess secret word', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
    })

    const inputBox = findByTestAttr(wrapper, 'input-box')
    const mockEvent = {target: {value: 'party'}}
    inputBox.simulate('change', mockEvent)

    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click', { preventDefault() {} })
  })

  test('adds row to guessedWords table', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordRows).toHaveLength(3)
  })

  test('display congrats component', () => {
    const congrats = findByTestAttr(wrapper, 'component-congrats')
    expect(congrats.text().length).toBeGreaterThan(0)
  })

  test('does not display input component contents', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')
    expect(inputBox.exists()).toBe(false)

    const submitButton = findByTestAttr(wrapper, 'submit-button')
    expect(submitButton.exists()).toBe(false)
  })
})