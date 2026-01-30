// Задача №1. Печатное издание
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача №2. Библиотека
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(key, value) {
    const result = this.books.find(book => book[key] === value);
    return result || null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(book => book.name === bookName);
    if (bookIndex !== -1) {
      return this.books.splice(bookIndex, 1)[0];
    }
    return null;
  }
}

const centralLibrary = new Library("Городская библиотека");

centralLibrary.addBook(new NovelBook("Лев Толстой", "Война и мир", 1869, 1225));
centralLibrary.addBook(new DetectiveBook("Артур Конан Дойл", "Этюд в багровых тонах", 1919, 200));

console.log(centralLibrary.findBookBy("releaseDate", 1919)); // Найдёт книгу

const myBook = centralLibrary.giveBookByName("Война и мир");
console.log("Состояние при выдаче:", myBook.state);

myBook.state = 20; // Сильно повредили
console.log("Состояние после повреждения:", myBook.state);

centralLibrary.addBook(myBook); // Попытка добавить (не добавится, < 30)
console.log("Книг в библиотеке:", centralLibrary.books.length);

myBook.fix(); // Починили (20 * 1.5 = 30)
myBook.state = 35; // Подклеили еще немного
centralLibrary.addBook(myBook); // Теперь добавится
console.log("Книг в библиотеке после починки:", centralLibrary.books.length);
