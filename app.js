let express = require('express')
let app = express()
let port = 3000


let students= [];
let contant='ID.json';
let fs = require('fs');

fs.readFile(contant, 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        students =data.split('\n'); 
      console.log(data);
      JSON.parse(data)
    }
})

app.get("/students/:id", (req, res) =>{
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "*");
      var id= req.params.id;
      var array=students.find(item=>item.id==id);
      res.send(array);
      console.log(array);
})

 app.listen(port, () => console.log(`Example app listening on port ${port}!`));
 