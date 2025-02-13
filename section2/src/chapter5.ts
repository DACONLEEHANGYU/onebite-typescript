// enum 타입
// 여러가지 값을데 각각 이름을 부여해 열거해두고 사용하는 타입
// 컴파일 시 사라지지 않고 자바스크립트의 객체로 변환되어 남아있다.

// 자동으로 숫자를 할당 하거나, 시작 숫자를 지정할 수 있다.

// 숫자형 Enum
enum Role {
    ADMIN = 10,
    USER,
    GEUST,
}

// enum 사용 시 값의 사용이 헷갈릴 경우가 줄어든다.
enum Language {
    KOREAN = 'ko',
    ENGLISH = 'en',
    JAPANESE = 'jp',
}

const user1 = {
    name: 'Neo',
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.KOREAN,
};
const user2 = {
    name: 'Nam',
    role: Role.USER, // <- 일반 유저
    language: Language.ENGLISH,
};
const user3 = {
    name: 'Eun',
    role: Role.GEUST, // <- 게스트
    language: Language.JAPANESE,
};

console.log(user1);
console.log(user2);
console.log(user3);
