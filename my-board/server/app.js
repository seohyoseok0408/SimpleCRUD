const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let id = 2;
const todoList = [{
  id: 1,
  text: '할일 1',
  done: false,
}];

app.get('/api/todo', (req, res) => {
  res.json(todoList);
})

app.post('/api/todo', (req, res) => {
  const { text, done } = req.body;
  console.log('req.body : ', req.body);
  todoList.push({
    id: id++,
    text,
    done,
  })
  return res.send("success");
})

app.listen(4000, () => {
  console.log('server start!!');
})