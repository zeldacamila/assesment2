require("dotenv").config()
const express = require ("express")
const { connect } = require ("./db")
const morgan = require("morgan")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 8081
connect()

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.listen((port), () => {
  console.log(`Connection succesfully on port ${port}`)
})