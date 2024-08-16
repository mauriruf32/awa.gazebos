const { User } = require("../db");

const PutUser = async (req, res) => {
  const {
    firstName,
    lastName,
    birthDate,
    phoneNumber,
    email,
    roll,
    deleted
  } = req.body;
  const userId = req.params.id;

  try {
    // Buscar el usuario por ID
    const userToUpdate = await User.findByPk(userId);

    if (!userToUpdate) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Actualizar los campos del usuario
    userToUpdate.firstName = firstName !== undefined ? firstName : userToUpdate.firstName;
    userToUpdate.lastName = lastName !== undefined ? lastName : userToUpdate.lastName;
    userToUpdate.birthDate = birthDate !== undefined ? birthDate : userToUpdate.birthDate;
    userToUpdate.phoneNumber = phoneNumber !== undefined ? phoneNumber : userToUpdate.phoneNumber;
    userToUpdate.email = email !== undefined ? email : userToUpdate.email;
    userToUpdate.roll = roll !== undefined ? roll : userToUpdate.roll;
    userToUpdate.deleted = deleted !== undefined ? deleted : userToUpdate.deleted;

    // Guardar los cambios
    await userToUpdate.save();

    res.json(userToUpdate);
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

module.exports = { PutUser };
