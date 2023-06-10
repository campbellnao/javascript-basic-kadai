
//変数の宣言(変数numに0〜100までのランダムな整数を代入する)
let num = Math.floor(Math.random() * 100);


if (num % 3 === 0) {
console.log('3の倍数です')
}
if (num % 5 === 0) {
    console.log('5の倍数です')
}
if (num % 3 === 0 && num % 5 === 0){
    console.log('3と5の倍数です')
}
else {
    console.log(num);
}
