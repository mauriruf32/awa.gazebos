const server = require("./src/app");

const {conn} = require("./src/db");

const PORT = 3001;

// const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()

// async function main() {
//     const Product = await prisma.product.findMany();
//   console.log(Product)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

server.listen(PORT, () => {
    conn.sync({force: false});
    console.log(`Listening on port ${PORT}`);
});
