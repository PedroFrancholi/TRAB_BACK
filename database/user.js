const {prisma} = require("./prisma.js")

const findByEmail = (email) => {
    return prisma.user.findUnique({
        where: {
            email,
        }
    })
}


const saveUser = (user) => {
    return prisma.user.create({
        data: {
            name: user.name,
            email: user.email,
            password: user.password,
        }
    });
};

module.exports = {
    saveUser,
    findByEmail,
}