import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  // Nota: se renomear o arquivo para [...params], qualquer variável após o users vai virar um parâmetro a parte
  const { id } = request.query

  const user = [
    { id: 1, name: 'Nelson' },
    { id: 2, name: 'Juliana' },
    { id: 3, name: 'Bruna' },
  ]

  return response.json(user.find(user => user.id === Number(id)))
}