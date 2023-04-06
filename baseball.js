//1.랜덤 숫자 만들기
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var randomNum = []

for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * numbers.length)
    randomNum[i] = numbers.splice(num, 1)[0]
}

console.log(randomNum) //삭제가능
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!")

var count = 0 //카운트 전역변수 설정

//2. 스트라이크 이전까지 반복
while (strikePoint != 3) {

    var strikePoint = 0
    var ballPoint = 0
    var input = prompt('숫자를 입력하세요.').split('').map(Number) //숫자배열 변환
    count++;


    //3.strike, ball 로직
    for (let n = 0; n < 3; n++) {
        if (input.indexOf(randomNum[n]) === n) {
            strikePoint += 1
        } else if (input.indexOf(randomNum[n]) >= 0) {
            ballPoint += 1
        }
    }

    console.log(count + "번째 시도: ", input)
    console.log(ballPoint + "B", strikePoint + "S")
}

//4. 종료메세지
console.log(count + "번만에 맞히셨습니다.")
console.log("게임을 종료합니다.")