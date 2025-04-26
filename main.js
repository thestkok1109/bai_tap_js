// Bài 1:
/**
 **Đầu vào:
 -Tạo biến luongNgay và gán giá trị là 100000
 -Tạo biến days cho người dùng nhập số ngày làm
 **Xử lý:
 -Tao bien tongTien va được cập nhật giá trị là luongNgay * day
 **Đầu ra:
 -In ra tổng tiền lương là: ${tongTien}
 */
let btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {

    let luongNgay = 100000;

    let days = document.getElementById("days").value * 1;

    let tongTien = luongNgay * days;

    // Display the result
    const convertNumber = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
    //string template
    // let output = "Tong 2 so la: " + result;
    let output = `${convertNumber.format(tongTien)}`;
    //DOM toi the p co id la pInfo1
    let Info1 = document.getElementById("Info1");
    // gan noi dung cho pInfo1
    Info1.innerHTML = output;

    Info1.classList.add("info1");
}


// Bài 2:
/**
 ** Đầu vào:
 - tạo biến num_1
 - tạo biến num_2
 - tạo biến num_3
 - tạo biến num_4
 - tạo biến num_5
 ** Xử lý:
 - tạo biến dtb và gán giá trị là 0
  - dtb được cập nhật giá trị là (num_1 + num_2 + num_3 + num_4 + num_5) / 5
 **Đầu ra
 - in ra điểm trung bình là: ${dtb}
 */

let btnDiemTrungBinh = document.getElementById("btnDiemTrungBinh");
btnDiemTrungBinh.onclick = function () {
    let num_1 = document.getElementById("num_1").value * 1;
    let num_2 = document.getElementById("num_2").value * 1;
    let num_3 = document.getElementById("num_3").value * 1;
    let num_4 = document.getElementById("num_4").value * 1;
    let num_5 = document.getElementById("num_5").value * 1;

    let dtb = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;

    let output = `${dtb}`;

    let Info2 = document.getElementById("Info2");
    Info2.innerHTML = output;
    Info2.classList.add("info2");

}



// Bài 3:
/**
 ** Đầu vào:
 - Tạo biến myUSD và gán giá trị là 23500
 - Tạo biến qdUSD cho người dùng nhập số tiền USD để quy đổi
 ** Xử lý:
 - Tạo biến soTienQuyDoi và được cập nhật giá trị là myUSD * qdUSD
 
 **Đầu ra
 
 */
let btnQuyDoi = document.getElementById("btnQuyDoi");
btnQuyDoi.onclick = function () {
    let myUSD = 23500;
    let qdUSD = document.getElementById("qdUSD").value * 1;

    let soTienQuyDoi = myUSD * qdUSD;
    // Display the result
    const convertNumber = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
    
    let output = `${convertNumber.format(soTienQuyDoi)}`;
    let Info3 = document.getElementById("Info3");
    Info3.innerHTML = output;
    Info3.classList.add("info3");


}


// Bài 4:
/**
 ** Đầu vào:
 - Tạo biến chieuDai
 - Tạo biến chieuRong
 ** Xử lý:
 - Tạo biến chuVi va được cập nhật giá trị là (chieuDai + chieuRong) * 2
 - Tạo biến dienTich va được cập nhật giá trị là chieuDai * chieuRong
 **Đầu ra:
 - In ra chu vi là: ${chuVi}
 - In ra diện tích là: ${dienTich}
 */

 let btnChuViDienTich = document.getElementById("btnChuViDienTich");
 btnChuViDienTich.onclick = function () {
    let chieuDai = document.getElementById("chieuDai").value * 1;
    let chieuRong = document.getElementById("chieuRong").value * 1;

    let chuVi = (chieuDai + chieuRong) * 2;
    let dienTich = chieuDai * chieuRong;

    let output = `${chuVi}`;
    let output2 = `${dienTich}`;
    let Info4 = document.getElementById("Info4");
    Info4.innerHTML = output;  
    Info4.classList.add("info4");
    let Info40 = document.getElementById("Info40");
    Info40.innerHTML = output2;  
    Info40.classList.add("info40");
 }

 // Bài 5:
/**
 * * Đầu vào:
 - Tạo biến num_20
 - Tạo biến hangChuc để lấy số hàng chục từ num_20
 - Tạo biến hangDonVi để lấy số hàng đơn vị từ num_20
 ** Xử lý:
 - Tạo biến tong2KiSo và được cập nhật giá trị là hangChuc + hangDonVi
 ** Đầu ra:
 - In ra Tổng 2 kí số là : ${tong2KiSo}
 */
let btnKiSo = document.getElementById("btnKiSo");
btnKiSo.onclick = function () {
    let num_20 = document.getElementById("num_20").value * 1;

    
    let hangChuc = Math.floor(num_20 / 10);
    let hangDonVi = num_20 % 10;

    let tong2KiSo = hangChuc + hangDonVi;

    let output = `Tổng 2 kí số là : ${tong2KiSo}`;
    let Info5 = document.getElementById("Info5");
    Info5.innerHTML = output;
    Info5.classList.add("info5");
}





