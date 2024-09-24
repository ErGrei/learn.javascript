// Каррирование функции применения скидки
// Напишите каррированную функцию, которая принимает процент скидки и цену товара и возвращает цену со скидкой.

function discount(discount) {
  return function (price) {
    return price - (price * discount) / 100;
  };
}

const discount10 = discount(10);
const discount20 = discount(20);

console.log(discount10(100));
console.log(discount20(100));

// Каррирование функции вычисления степени числа
// Создайте каррированную функцию, которая принимает основание и степень, и возвращает результат возведения в степень.

function power(base) {
  return function (exponent) {
    return Math.pow(base, exponent);
  };
}

const square = power(2);
const cube = power(3);

console.log(square(3));
console.log(cube(2));

// Каррирование функции объединения массивов
// Создайте каррированную функцию, которая принимает два массива и объединяет их в один.

function mergeArrays(arr1) {
  return function (arr2) {
    return [...arr1, ...arr2];
  };
}

const mergeWithA = mergeArrays([1, 2, 3]);

console.log(mergeWithA([4, 5, 6]));

// Реализация виртуального прокси. У вас есть функция которая загружает большие изображения с удалённого сервера. Напишите фннкцию-посредник (прокси), которая будет загружать изображение только при первом запросе на его отображение.

// Подсказка:

// Реализуйте интерфейс для отображения изображения.
// Функция реального изображения загружает файл при вызове метода display().
// Прокси-функция должена хранить ссылку на реальный объект изображения и загружать его только при первом вызове метода display().

// Оригинальная функция, которая имитирует загрузку изображения
function createRealImage(filename) {
  return {
    filename,
    loadImage() {
      console.log(`Loading image from ${this.filename}`);
    },
    display() {
      console.log(`Displaying ${this.filename}`);
    },
  };
}

function createImageProxy(filename) {
  let realImage = null;

  return new Proxy(
    {},
    {
      get(target, prop) {
        if (prop === "display") {
          if (realImage === null) {
            realImage = createRealImage(filename);
            realImage.loadImage();
          }
          return realImage.display.bind(realImage);
        }
        return undefined;
      },
    }
  );
}

const image = createImageProxy("image.jpg");
console.log("Image not loaded yet...");

image.display();
image.display();

// Логирующий прокси. Создайте прокси-функцию, которая логирует все вызовы методов другой функции. Например, есть функция Calculator, выполняющая математические операции (сложение, вычитание, умножение и деление). Реализуйте прокси, который будет записывать все вызовы этих методов и выводить их в консоль.

// Подсказка:

// Прокси должен оборачивать методы функции Calculator и добавлять вывод в консоль информации о методе и аргументах перед их выполнением.

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  },
};

const loggingProxy = new Proxy(calculator, {
  get(target, prop) {
    const originalMethod = target[prop];

    if (typeof originalMethod === "function") {
      return function (...args) {
        console.log(`Calling ${prop}(${args.join(", ")})`);
        return originalMethod.apply(target, args);
      };
    }

    return originalMethod;
  },
});

console.log(loggingProxy.add(10, 5)); 
console.log(loggingProxy.subtract(10, 5)); 
console.log(loggingProxy.multiply(5, 2)); 
console.log(loggingProxy.divide(10, 2)); 
