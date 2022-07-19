const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
  // be sure to include its associated Products
  include: [
    {
      model: Product,
      attributes: ['id', 'price', 'stock', 'product_name', 'category_id']
    }
  ]
  })
  // returns json data with a promise, if error console log error
  .then(catData => res.json(catData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    // search params are ID
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: [
      {
        model: Product,
        attributes: ['id', 'price', 'stock', 'product_name', 'category_id']
      }
    ]
  })
  // returns json data with a promise, if error console log error
  .then(catData => res.json(catData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    // create params are ID and category_name
    // id is auto_increment so for request only need to enter category_name
    id: req.body.id,
    category_name: req.body.category_name
  })
    // returns json data with a promise, if error console log error
    .then(catData => res.json(catData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
      });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
