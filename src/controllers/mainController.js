
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const mainController = {
    index : (req,res)=>{
        const inSale = productModel.inSale('in-sale')
        res.render('home', {inSale})
    },
    producto: (req, res) => {
        const inSale = productModel.inSale('in-sale')
        let productos = productModel.readFile();
        let producto = productos.find(producto => producto.id == req.params.productoId);
        res.render("productDetail", { producto : producto , productos : productos, inSale});
    },
    cart: (req, res) => {
        let productos = productModel.readFile();
        res.render("productCart", { productos : productos });
    },
    login: (req, res) => {
        res.render("login", {  });
    },
    register: (req, res) => {
        res.render("register", {  });
    },
    productRecom: (req, res) => {
        let productos = productModel.readFile();
        res.render("productCart", { productos : productos });
    },
    producList: (req, res) => {
        let productos = productModel.readFile();
        res.render("productList", { productos : productos });
    },
    create:(req,res)=>{
        let productos = productModel.readFile();
        res.render("create",{productos: productos})
    }
}





module.exports = mainController;
