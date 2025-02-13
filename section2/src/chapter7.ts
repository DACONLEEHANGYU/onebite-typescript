// void , Naver

// void => 공허 / 아무것도 반환하지 않는 함수

const func1 = (): string => {
    return 'hello';
};

// java void 와 비슷하게 사용 main
const func2 = (): void => {
    console.log('hello');
};

let a: void;
//a = 1;
//a = 'hello';
// a = {};
// a = null; // 엄격한 검사 false 시 할당 가능
a = undefined;

// naver
// naver -> 존재하지 않는
// 불가능한 타입

const func3 = (): never => {
    while (true) {}
};

const func4 = (): never => {
    throw new Error();
};

let anyVar: any;

let b: never;

// func2();
