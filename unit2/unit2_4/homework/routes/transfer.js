router.post("/transfer", (req, res) => {
    const from = req.body.fromAccount;
    const to = req.body.toAccount;
    const amount = parseInt(req.body.amount);

    db.run("UPDATE accounts SET balance = balance - ? WHERE id=?", [amount, from]);
    db.run("UPDATE accounts SET balance = balance + ? WHERE id=?", [amount, to]);

    res.send("Transfer complete");
});