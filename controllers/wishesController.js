const Wish = require('../models/wishList');

exports.getWishPage = (req, res)=> {
    Wish.fetchWishes(wishList => {
         res.render('index.ejs', {wishItems: wishList});
         console.log(wishList);
    });
};
exports.postnewWish = (req, res) =>{
    let wish = new Wish(req.body.newWish, req.body.newPrice);
    wish.saveWish();
    res.redirect('/');
};

exports.deleteWish = (req, res) =>{
    console.log('call from delete' + req.body.hidden);
    Wish.deleteWish(req.body.hidden);
    res.redirect('/');
};