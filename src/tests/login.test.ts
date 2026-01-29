const url_base:string = "http://localhost:3000/api/login"

const new_login = {
    email: "fulano@email.com",
    password: "123456789"
}

test("POST: /login = 200", async() => {
  const res = await fetch(url_base, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(new_login)
  }) 
  expect(res.status).toBe(201);
})