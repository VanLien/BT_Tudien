function Result() {
    let english=["result","search","repository","board"];
    let vietnames=["Kết Quả","Tìm Kiếm","Kho","Bảng"];
    let input=document.getElementById("tienganh").value;
    let result=english.indexOf(input.toLowerCase());
        if (result!== -1){
            document.getElementById("tiengviet").value=vietnames[result];
        } else {
            document.getElementById("tiengviet").value="Không Tìm Thấy"
        }
}