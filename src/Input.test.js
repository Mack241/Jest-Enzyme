import React from 'react'
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from '../test/testUtils'
import Input from "./InputComponent";

const defaultProps = { secretWord: 'apple' }

const setup = (success = false, secretWord='apple') => {
  return shallow(<Input success={success} secretWord={secretWord}/>)
}

describe('Input field tests', () => {
  describe('success is true', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup(true)
    })

    test('Input component renders without an error', () => {  
      const component = findByTestAttr(wrapper, 'component-input')
    
      expect(component.length).toBe(1)
    })

    test('Input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(false)
    })

    test('Guess button does not show', () => {
      const guessButton = findByTestAttr(wrapper, 'submit-button')
      expect(guessButton.exists()).toBe(false)
    })
  })

  describe('success is false', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup(false)
    })

    test('Input component renders without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input')
      expect(inputComponent.length).toBe(1)
    })

    test('Input box shows', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(true)
    })

    test('Guess button renders correctly', () => {
      const guessButton = findByTestAttr(wrapper, 'submit-button')
      expect(guessButton.exists()).toBe(true)
    })
  })
})

test('renders without error when provided with correct props', () => {
  checkProps(Input, defaultProps)
})

describe('state controlled input field', () => {

 let wrapper
 let mockSetCurrentGuess = jest.fn()
 let originalUseState

  beforeEach(() => {
    mockSetCurrentGuess.mockClear()
    originalUseState = React.useState
    React.useState = jest.fn(() => ["", mockSetCurrentGuess])
    wrapper = setup()
  })

  afterEach(() => {
    React.useState = originalUseState
  })

  test('state updates with value of input box upon change', () => {
    
    const inputBox = findByTestAttr(wrapper, 'input-box')

    const mockEvent = { target: { value: 'train' } }
    inputBox.simulate('change', mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('input field gets cleared when "Guess" button is clicked', () => {

    const button = findByTestAttr(wrapper, 'submit-button')
    button.simulate('click', { preventDefault() {} })

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
  })
})