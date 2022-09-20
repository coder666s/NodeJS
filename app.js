const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    
  try {
    let arr = request.url.split(/num1=|&num2=/);
          if (arr[0] == '/?') {
          if (isNaN(parseInt(arr[1])) || isNaN(parseInt(arr[2]))) throw new Error("Ошибка");
          response.setHeader('Content-Type', 'application/json');
          let json = {
                    name: 'Vasilev',
                    number1: arr[1],
                    number2: arr[2],
                    sum: Number(arr[1]) + Number(arr[2]),
                    min: Number(arr[1]) - Number(arr[2]),
                    mul: Number(arr[1]) * Number(arr[2]),  
                    div: Number(arr[1]) / Number(arr[2])
                  };
          response.end(JSON.stringify(json));
          }
          else {
            fs.readFile("index.html", (error, data) => response.end(data));
          }
  }
  catch {
          response.writeHead(400, {'Content-Type': 'application/json'});
          let json = {
            name: 'nodejs',
            desc: "Error 400"
          };
          response.end(JSON.stringify(json));
  }


});

let port = 3000; 

server.listen(port, () => {
    console.log("Сервер запущен http://localhost:3000");
    console.log("Номер порта:", port);

});
