router.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.get(
        "SELECT * FROM users WHERE username=? AND password=?",
        [username, password],
        (err, user) => {
            if (user) {
                req.session.user = user.username;
                req.session.userId = user.id;
                res.redirect("/dashboard");
            } else {
                res.send("Login failed");
            }
        }
    );
});