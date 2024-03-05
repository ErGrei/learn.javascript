//Цыклы
for (let i = 0; i < 5; i++) {
        console.log(i);
    }

//Можно убрать аргументы и использовать внешнюю переменную,
//Фактически это цыкл while
let i = 0;
for (; i < 5; ) {
    console.log(i);
    i++;
}

//можно вызвать без переменных
//!!!Бесконечный цыкл!!!!
//for (;;) {
//    console.log(i);
//}

//цикл while
let w = 0;
while (w < 5) {
    console.log(i);
    w++;
}

//цикл do while
let q = 0;
do {
    console.log(q);
    q++;
} while (q < 5)

