

test("POST: /api/reserva = 200", async()=>{
    const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email:"possonato@email.com",
            senha:"123"
        })
    });

    expect(res.status).toBe(200);
    const token = await res.json();

    const resp = await fetch("http://localhost:3000/api/reserva", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify({
            pagamento: "Pix",
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

})