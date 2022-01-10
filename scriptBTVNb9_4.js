/*
Viết code yêu cầu đăng nhập với prompt.
Nếu khách truy cập nhập “Admin“, sau đó nhắc nhập mật khẩu.
Nếu đầu vào là một dòng trống hoặc Esc – hiển thị “Canceled”.
Nếu là một chuỗi khác – thì hiển thị “Tôi không biết bạn”.
Mật khẩu được kiểm tra như sau:
Nếu nó bằng “cafedev”, thì hãy hiển thị “Chào mừng!”,
Một chuỗi khác – hiển thị “Mật khẩu sai”,
Đối với một chuỗi trống hoặc đầu vào đã hủy, hãy hiển thị “Đã hủy”
*/

let username = prompt("Nhập Tên Đăng Nhập Của Bạn: ");
if (username == "Admin") {
    let password = prompt("Nhập Mật Khẩu Của Bạn: ");
    if (password == "cafedev") {
        alert("Chào mừng!");
    } else if (password = "\s") {
        alert("Đã Huỷ.")
    } else {
        alert("Mật Khẩu Sai.")
    }
} else if (username = "\s" ) {
    alert("Canceled");
} else {
    alert("Tôi Không Biết Bạn.");
}