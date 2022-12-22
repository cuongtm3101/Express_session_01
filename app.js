// Require những module cần thiết
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// Sử dụng những module - package đó
app.use(bodyParser.urlencoded({ extended: false }));
// false - Không phải dạng object Javascript --> Phải parse lại để sử dụng
// TỐT NHẤT LÀ ĐỂ true
app.use(bodyParser.json());

// Set up những endpoint để hứng request
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// NodeJS là runtime - envinronment
// NODEJS được build trên nền C++ (V8 engine)
// Single-thread - xử lý đơn luồng

// -> giúp cho Javascript có thể chạy trên môi trường server

// Server-side rendering, client-side rendering, mô hình client-server

// Express là gì?
// Là một framework được build trên nền nodejs
// giúp chúng ta có thể xử lý những request gửi đến
// và trả về những response một cách dễ dàng hơn

// REQUEST

// GET/POST/[PUT/PATCH]/DELETE
// Read/Create/Update/Delete (C/R/U/D) (***)

// Form (action="", methods=[GET/POST])

// Fetch --> request (***)
// POSTMAN, INSOMNIA ()

// 1. GET (READ) request
// a. GET ALL

// b. Query string
// Là phương thức đính kèm thông tin lên trên GET request

// endpoint?key1=value1&key2=value2...&keyn=valuen
// req.query

// FORM - GET methods

// VD:
// Với một trang web xem phim
// "/api/movies" - GET request - Lấy về toàn bộ bộ phim

// trang đầu tiên: "/api/movies?per_page=10&page_index=1"
// trang số 2: "/api/movies?per_page=10&page_index=2"

app.get("/api/movies", (req, res) => {
  // req - Object chứa toàn bộ thông tin về request mà người dùng
  // gửi đến
  console.log(req.query);

  // VD:
  // người dùng đang cần kiểu phim genre = action
  // main_character="JonnyDepp"
  // Chọc vào DB

  // if (Dữ liệu từ DB.type === req.query.genre) {
  //     res.json({})
  // }
  // else {
  //     res.json({message: "Không tồn tại dữ liệu"})
  // }

  // res - Object chứa toàn bộ những phương thức để trả về dữ liệu
  // cho phía client

  // res.send("<h1>hello world</h1>");
  res.json({
    users: [
      {
        id: 1,
        name: "Trường",
      },
      {
        id: 2,
        name: "Hoàng",
      },
    ],
  });
  //
});

// b. GET ONE
// parameters
// PHẢI Định nghĩa parameters ở trên server
// Đồng thời để lấy ra các parameters chúng ta sẽ sử dụng
// req.params

// app.get("/api/users/:id/:email", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
// });

// 2. POST - CREATE
// a. FORM HTML
// gửi thông tin thông qua form
// với
// - endpoint === action attribute
// - method === [POST]
// NOTE: chúng ta có thể mô phỏng quá trình gửi POST request
// thông qua form trong html = POSTMAN
// Thông tin sẽ nằm trong phần body > x-www-form-urlencoded

// b. fetch Javascript
// Bình thường khi sử dụng fetch Javascript, chúng ta sẽ gửi
// thông tin lên server dưới dạng Json

// NOTE: Chúng ta có thể mô phỏng quá trình gửi POST request
// thông qua fetch Javascript = POSTMAN
// Thông tin sẽ nằm trong phần body > raw (kiểu dữ liệu == json)

app.post("/api/users", (req, res) => {
  console.log(req.body);
});

// 3. PUT/PATCH - UPDATE

// NOTE: Sơ khai thì chỉ có thể dùng form để gửi dữ liệu
// đến server endpoint --> Chỉ tồn tại GET/POST request
// --> GET request có thể thay thế cả DELETE request
// --> POST request có thể thay thế cả PUT request

// Ngày nay, web phát triển ==> Đã có đầy đủ các request
// dành cho 4 tác vụ C/R/U/D

// (****)
// Thực hiện tác vụ nào thì phải sử dụng đúng request của tác vụ đó

app.put("/api/users/:id", (req, res) => {
  // Tiến hành lấy ra user có id === id
  // Tiến hành update và gửi về thông báo thành công hoặc thất bại
  // cho client
  // Lấy thông tin cần update trong req.body
});

// 4. DELETE request
// DELETE ONE
app.delete("/api/users/:id", (req, res) => {
  // Tiến hành lấy ra user có id === id
  // Tiến hành delete và gửi về thông báo thành công hoặc thất bại
  // cho client
});

// DELETE ALL
app.delete("/api/users", (req, res) => {
  // Tiến hành lấy ra user có id === id
  // Tiến hành delete và gửi về thông báo thành công hoặc thất bại
  // cho client
});

// Lắng nghe server tại cổng
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
