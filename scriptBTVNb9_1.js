/*
Bài 1: 
  Hàm sau đây trả về true nếu tuổi tham số lớn hơn 18.
  Nếu không, nó sẽ yêu cầu xác nhận và trả về kết quả của nó.
  Viết lại nó, để thực hiện tương tự, nhưng không có if, trong một dòng duy nhất.
  Tạo hai biến thể sau:
  Sử dụng một toán tử dấu chấm hỏi ?
  Sử dụng OR ||
*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
checkAge;

//Version 1: Use "?"
/*
Syntax: variablename = (condition) ? value1 : value2
*/

function checkAge(age) {
  age = age > 18 ? true : confirm("Did parents allow you?");
}

//Version 2: Use "OR ||"
