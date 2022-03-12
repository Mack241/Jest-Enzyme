import moxios from 'moxios'
import { getSecretWord } from './'

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('secretWord is returned', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: 'party'
      })
    })

    const res = await getSecretWord()

    return expect(res).toBe('party')
  })
})