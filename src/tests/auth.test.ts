const url_base:string = "http://localhost:3000/api/login"

const new_login = {
    email: "fff",
    senha: "123"
}


//Teste de Login

test("POST: /login = 200", async() => {
  const res = await fetch(url_base, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(new_login)
  }) 
  expect(res.status).toBe(200);
  const json = await res.json()
  // console.log(json);
})


test("POST / login(sem senha) = 400", async () => {
    const res = await fetch(url_base, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "fff",
            senha: ""}
        )
    });
    expect(res.status).toBe(400);
});



//Teste de Register

test("POST /register = 200", async ()=>{
  const res = await fetch(url_base + "/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      nome: "Possonato",
      email: "possonato@email.com",
      telefone: "(00) 00000-0000",
      cpf: "123.456.789-00",
      senha: "123"
    })
  })
  expect(res.status).toBe(200);
  const token = await res.json();
  // console.log(token);
})