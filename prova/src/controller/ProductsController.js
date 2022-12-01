const Products = require("../model/Products");


module.exports = {
    async listaDeProdutos(req, res) {
        const products = await Products.findAll();

        return res.json(products);
    },
    async listaDeProdutosSo(req, res) {
        const { id } = req.params;
        const products = await Products.findAll({
            where: {
                id: id
            }
        });

        return res.json(products);
    },
    async deletarProdutos(req, res) {
        const { id } = req.params;
        const products = await Products.destroy({
            where: {
                id: id
            }
        });

        return res.json(products);
    },
    async postarProdutos(req, res) {
        const { name, price, created } = req.body;
        const products = await Products.create({
            name: name,
            price: price,
            created: created
        });

        return res.json(products);
    },
    async atualizarProdutos(req, res) {
        const { name, price, updated } = req.body;
        const products = await Products.update(
            {
                name: name,
                price: price,
                updated: updated
            },
            {
                where: {
                    id: id
                }
            }
        );

        return res.ljson(products);
    }
}