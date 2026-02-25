

test("POST: /api/reserve = 200", async() => {
    // Realiza login
    const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email:"fff",
            senha:"123"
        })
    });

    expect(res.status).toBe(200);
    const token = await res.json();

    // Realiza reserva
    const resp = await fetch("http://localhost:3000/api/reserve", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify({
            pagamento: "PIX",
            quartos: [
                {
                    id: 6,
                    inicio: "2026/02/19",
                    fim: "2026/02/21",
                },
                {
                    id: 7,
                    inicio: "2026/02/20",
                    fim: "2026/02/22",
                }

            ]
        })
    });
    expect(resp.status).toBe(200);
    const json = await resp.json();
    console.log(json)
})