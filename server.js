const express = require('express');
const bodyParser = require('body-parser');
const googleSheets = require('gsa-sheets');

// TODO(you): Update the contents of privateSettings accordingly, as you did
// in HW5, then uncomment this line.
const key = require('./privateSettings.json');

// TODO(you): Change the value of this string to the spreadsheet id for your
// GSA spreadsheet, as you did in HW5, then uncomment these lines.
const SPREADSHEET_ID = '1B8jqo-DpTTcwHh7IK_GH9FuJ8N6EA0RDlCnzX94A2_k';
const sheet = googleSheets(key.client_email, key.private_key, SPREADSHEET_ID);

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

// TODO(you): Add at least 1 GET route and 1 POST route.
app.get('public/id/123', function (req, res) {
  console.log('inin');
  res.send('public/id/123.html');
})

async function onGet(req, res) {
  const result = await sheet.getRows();
  const rows = result.rows;
  console.log(rows);

  // TODO(you): Finish onGet.
  var all = [];
  var part = {};
    for (var i=1; i < rows.length; i++) {
        part = {[rows[0][0].toString()]: rows[i][0].toString(), [rows[0][1].toString()]: rows[i][1].toString()};
        all.push(part);
    }
    res.json(all);

}
app.get('/api', onGet);
// Please don't change this; this is needed to deploy on Heroku.
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});
