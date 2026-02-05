const url_base2:string = "http://localhost:3000/register"

const new_reg = {
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    senha: ""
}

test("POST: /login = 200", async() => {
  const res = await fetch(url_base2, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(new_reg)
  }) 
  expect(res.status).toBe(200);
  const json = await res.json()
  console.log(json);
})

// test("POST: /login (sem senha) = 400", async () => {

// })