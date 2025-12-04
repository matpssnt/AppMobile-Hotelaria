
const URL_BASE:string = "http://localhost:3000/tasks"

let task_id: number = 0

const new_task = {
  name: "Task name",
  description: "Task description"
}

const update_task = {
  name: "Task name updated",
  description: "Task description updated"
}

test("GET: /tasks = 200", async () => {
  const res = await fetch(URL_BASE)
  expect(res.status).toBe(200);

  const body = await res.json()
  expect(Array.isArray(body)).toBe(true)
})

test("POST: /tasks = 201(Create task)", async() => {
  const res = await fetch(URL_BASE, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(new_task)
  })
  expect(res.status).toBe(201);

  const content = await res.json()
  task_id = content.id
  console.log(task_id)
  expect(content).toHaveProperty('id')
  expect(content).toHaveProperty('name')
  expect(content).toHaveProperty('description')
})

test("GET: /tasks/1 = 200", async() => {
  const res = await fetch(`${URL_BASE}/${task_id}`)
  expect(res.status).toBe(200);

  const content = await res.json()
  expect(content).toHaveProperty('name', new_task['name'])
  expect(content).toHaveProperty('description', new_task['description'])
})

test("PUT: /tasks/1 = 201 (Update task)", async() => {
  const res = await fetch(`${URL_BASE}/${task_id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(update_task)
  })
  expect(res.status).toBe(201);
})

test("DELETE: /tasks/:id = 204", async() => {
  const res = await fetch(`${URL_BASE}/${task_id}`, {
    method: "DELETE"
  })
  expect(res.status).toBe(200)

  const content = await res.json()
  expect(content).toHaveProperty('id')
  expect(content).toHaveProperty('name')
  expect(content).toHaveProperty('description')
})



// TESTE PARA ERROS

test("GET: /tasks/id == 404", async() => {
  const res = await fetch(`${URL_BASE}/99999999`)
  expect(res.status).toBe(404);
})

test("POST: /tasks = 400 (Error create task)", async() => {
  const res = await fetch(URL_BASE, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({})
  })
  expect(res.status).toBe(400);

  const content = await res.json()
  expect(content).toHaveProperty('erro', 'Dados invalidos')
})
