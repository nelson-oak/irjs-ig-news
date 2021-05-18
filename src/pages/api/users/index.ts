import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const user = [
    { id: 1, name: 'Nelson' },
    { id: 2, name: 'Juliana' },
    { id: 3, name: 'Bruna' },
  ]

  return response.json(user)
}