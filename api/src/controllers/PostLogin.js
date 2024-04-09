const { User } = require("../db.js");

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) return res.status(400).send("Faltan datos");
    console.log(email, password);

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).send("Usuario no encontrado");

    /* if (user.password === password)
      return res.status(200).json({ access: true });

      return res.status(403).send("Contraseña incorrecta"); */

    return user.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).send("Contraseña incorrecta");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  postLogin
};