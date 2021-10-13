var express = require('express');
var cors = require('cors');
var multer = require('multer');
const upload = multer({ dest: 'uploads/'});
var bodyParser = require('body-parser')
require('dotenv').config()

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', upload.single("upfile"), function (req, res, next)
{

  res.json({funny: "funny", file: req.file});
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
