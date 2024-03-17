// const { Image } = require('../db');

// const createProductImage = async (productId, url) => {
//     try {
//         // Verifica que productId sea un valor válido
//         if (!productId) {
//             throw new Error('productId is required');
//         }

//         // Verifica que imageUrl sea una cadena de texto
//         if (typeof url !== 'string') {
//             throw new Error('imageUrl must be a string');
//         }

//         // Crea la instancia de Image con los datos proporcionados
//         return await Image.create({
//             productId: productId,
//             url: url
//         });
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };

// module.exports = {
//     createProductImage
// };
