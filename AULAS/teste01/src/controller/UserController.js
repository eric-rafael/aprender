// Responsável pelas partes funcionais de router

const res = require('express/lib/response')
const User = require('../models/User')

module.exports = {
    async createuser(req, res) { // Metódo CREATE <<<<
        try {
            const { name, email } = req.body

            const user = await User.findOne({ where: { email } })

            if (user) {
                res.status(401).json({ message: "Já existe um usuário com este email" })

            } else {
                const user = await User.create({ name, email })

                res.status(200).json({ user })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async updateUser(req, res) { // Método UDPATE <<<<
        try {
            const { id } = req.params
            const { name, email } = req.body

            const user = await User.findOne({ where: { id } })

            if (!user) {
                res.status(401).json({ message: "Nenhum usuário encontrado!" })
            } else {
                const user = await User.update({ name, email }, { where: { id } })

                res.status(200).json({ user })
            }
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async listUsers(req, res) {
        try {
            const users = await User.findAll()

            if (!users) {
                res.status(200).json({ message: "Nenhum usuário cadastrado!" })
            }
            res.status(200).json({ users })
        } catch(error) {
            res.status(400).json({ error })
        }
    },
    async deleteUser(req, res) {
        const { id } = req.params

        const user = await User.findOne({ where: { id } })
        if (!user) {
            res.status(401).json({ message: "Usuário não encontrado!" })
        } else {
            await User.destroy({ where: { id } })
            res.status(200).json({ ok: true })
        }
    }
}