router.get("/admin", (req, res) => {
    if (req.session.user) {
        res.send("Admin panel");
    }
});