function CircleArea() {
    let Val1 = document.getElementById("_First").value;
    let _Second = Math.PI * Number(Val1) ** 2;


    document.getElementById("_Second").value=_Second.toFixed(2);
}
