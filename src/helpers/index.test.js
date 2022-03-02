import { getLetterMatchCount } from "./";

describe('getLetterMatchCount', () => {
  const secretWord = 'apple'
  test('returns correct count when there are no matching letters', () => {
    const LetterMatchCount = getLetterMatchCount('boy', secretWord)
    expect(LetterMatchCount).toBe(0)
  })

  test('returns the correct count when there are 4 matching letters', () => {
    const LetterMatchCount = getLetterMatchCount('plastic', secretWord)
    expect(LetterMatchCount).toBe(4)
  })

  test('returns the correct count when there are duplicate letters', () => {
    const LetterMatchCount = getLetterMatchCount('application', secretWord)
    expect(LetterMatchCount).toBe(4)
  })
})