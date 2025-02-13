// enum 타입
// 여러가지 값을데 각각 이름을 부여해 열거해두고 사용하는 타입
// 자동으로 숫자를 할당 하거나, 시작 숫자를 지정할 수 있다.
// 숫자형 Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GEUST"] = 12] = "GEUST";
})(Role || (Role = {}));
// enum 사용 시 값의 사용이 헷갈릴 경우가 줄어든다.
var Language;
(function (Language) {
    Language["KOREAN"] = "ko";
    Language["ENGLISH"] = "en";
    Language["JAPANESE"] = "jp";
})(Language || (Language = {}));
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
export {};
