//сщзжать объект
obj = {
    a: 5,
    b: 2,
    c: 3,
    e: {
        a: 5,
        b: 2,
        c: [1, 2, 3],

    }
}
//console.log(obj);

obj2 = new Object();

//можно передать объект
obj3 = new Object(obj);
obj3.d = 6;
//console.log(obj3);

//если ничего не передат TypeError: Object prototype may only be an Object or null: undefined
//создает объект на основе прототипа другово объекта
obj4 = Object.create(obj);
//console.log(obj4.a);

// копирование объектов
obj5 = Object.assign({}, obj);
console.log(obj5);

obj6 = {...obj};
console.log(obj6);
