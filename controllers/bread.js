const router = require("express").Router()
const Bread = require("../models/bread")

// get all bread
router.get("/", async (req, res) => {
  const breads = await Bread.find()
  res.render("index", { breads })
})

// GET
router.get("/new", (req, res) => {
  res.render("new")
})

// get bread by index
router.get("/:id", async (req, res) => {
  const { id } = req.params
  const bread = await Bread.findById(id)
  res.render("show", {
    bread
  })
})

// GET edit page
router.get("/:index/edit", (req, res) => {
    const { index } = req.params
    res.render("edit", {
        bread: Bread[index],
        index
    })
})

// POST request create a new bread
router.post("/", async (req, res) => {
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  if (!req.body.image)
    req.body.image =
      undefined

  await Bread.create(req.body)
  res.status(303).redirect("/breads")
})

// PUT update a bread by index
router.put('/:index', (req, res) => {
    const { index } = req.params
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    if (!req.body.image) req.body.image = '/images/MAY23_Breakfast_AllHailBiscuit_HatsueAdobeStock.jpg'

    Bread[index] = req.body
    res.status(303).redirect(`/breads/${index}`)
})

router.delete("/:index", (req, res) => {
  const { index } = req.params
  Bread.splice(index, 1)
  res.status(303).redirect(`/breads/${index}`)
})

module.exports = router
