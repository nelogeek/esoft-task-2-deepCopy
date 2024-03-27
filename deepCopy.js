// Функция для выполнения глубокого копирования объекта
function deepCopy(obj) {
    // Создаем объект-карту для хранения уже скопированных объектов
    const copiedObjects = new Map();
  
    // Вспомогательная функция для рекурсивного копирования
    function copy(obj) {
      // Если объект уже был скопирован, возвращаем его
      if (copiedObjects.has(obj)) {
        return copiedObjects.get(obj);
      }
  
      // Создаем новый объект
      let newObj;
  
      // Проверяем тип объекта
      if (Array.isArray(obj)) {
        // Если это массив, создаем новый массив и копируем его элементы
        newObj = [];
        for (let i = 0; i < obj.length; i++) {
          newObj.push(copy(obj[i]));
        }
      } else if (typeof obj === 'object' && obj !== null) {
        // Если это объект, создаем новый объект и копируем его свойства
        newObj = {};
        copiedObjects.set(obj, newObj); // Запоминаем, что мы скопировали этот объект
        for (let key in obj) {
          newObj[key] = copy(obj[key]);
        }
      } else {
        // Если это примитивное значение, просто возвращаем его
        newObj = obj;
      }
  
      return newObj;
    }
  
    // Запускаем рекурсивное копирование с переданным объектом
    return copy(obj);
  }
  
  // Пример использования функции
  const originalObj = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4]
    }
  };
  
  const copiedObj = deepCopy(originalObj);
  console.log(copiedObj); // Выведет скопированный объект
  