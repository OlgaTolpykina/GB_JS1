'use strict';

// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных 
//     видео -> 3 примеры наследования -> механика наследования), 
//     а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты 
//     типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
//     б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с 
//     помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться 
//     свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
//     Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству 
//     highlighted значение true.

//typeses5

/*

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function() {
    console.log(this.text);
}

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
    console.log(this.highlighted);
}

let obj1 = new AttachedPost('Он', 'текст', '5 октября');
obj1.edit();
obj1.makeTextHighlighted();

*/

//typeses6

class Post {
    constructor (author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        console.log(this.text);
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }
        makeTextHighlighted() {
            this.highlighted = true; 
            console.log(this.highlighted);
        }
    }

let obj1 = new AttachedPost('Он', 'текст', '5 октября');
obj1.edit();
obj1.makeTextHighlighted();