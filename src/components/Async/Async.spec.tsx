import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Async } from '.'

test('it renders correctly', async () => {
  render(<Async />)

  expect(screen.getByText('Hello world')).toBeInTheDocument()

  // APARECER NA TELA
  // Uma forma (usar isButtonVisible pra testar)
  // expect(await screen.findByText('Button')).toBeInTheDocument()
  
  // Outra forma (usar isButtonVisible pra testar)
  // await waitFor(() => {
  //   return expect(screen.getByText('Button')).toBeInTheDocument()
  // })

  // SER REMOVIDO DA TELA
  // Uma forma (user isButtonInvisible para testar)
  // await waitForElementToBeRemoved(screen.queryByText('Button'))

  // Outra forma (usar isButtonVisible pra testar)
  await waitFor(() => {
    return expect(screen.queryByText('Button')).toBeInTheDocument()
  })
})