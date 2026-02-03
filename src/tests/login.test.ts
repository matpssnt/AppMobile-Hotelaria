const url_base:string = "http://localhost:3000/api/login"

const new_login = {
    email: "fff",
    password: "123"
}

test("POST: /login = 200", async() => {
  const res = await fetch(url_base, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(new_login)
  }) 
  expect(res.status).toBe(201);
})

// test("POST: /login (sem senha) = 400", async () => {

// })