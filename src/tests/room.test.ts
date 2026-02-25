

test("POST: /api/roomsAvailable = 200", async()=>{
    const resp = await fetch("http://localhost:3000/api/roomsAvailable",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            inicio:"11/02/2026",
            fim:"12/02/2026",
            quantidade:1
        })
    });
    expect(resp.status).toBe(200);
    const json = await resp.json()
    console.log(json)
})