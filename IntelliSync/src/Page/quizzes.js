export const quizzes = {
  html: [
    { question: 'What does HTML stand for?', answers: { a: 'Hyper Text Markup Language', b: 'Hyperlinks and Text Markup Language', c: 'Hyper Text Markup Link', d: 'Hyperlink Text Markup Language' }, correct_answer: 'a' },
    { question: 'Which of these elements is used to define a block of code?', answers: { a: '<code>', b: '<pre>', c: '<block>', d: '<codeblock>' }, correct_answer: 'b' },
    { question: 'Which tag is used to create an ordered list?', answers: { a: '<ul>', b: '<ol>', c: '<li>', d: '<list>' }, correct_answer: 'b' },
    { question: 'How do you create a hyperlink in HTML?', answers: { a: '<a href="url">text</a>', b: '<link url="text">', c: '<hyperlink="url">text</hyperlink>', d: '<url="text">text</url>' }, correct_answer: 'a' },
    { question: 'What is the correct HTML element for inserting a line break?', answers: { a: '<break>', b: '<br>', c: '<lb>', d: '<newline>' }, correct_answer: 'b' },
    { question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?', answers: { a: 'src', b: 'alt', c: 'title', d: 'description' }, correct_answer: 'b' },
    { question: 'What is the purpose of the <meta> tag in HTML?', answers: { a: 'To include external JavaScript files', b: 'To define metadata about the HTML document', c: 'To create a hyperlink', d: 'To specify the HTML document’s title' }, correct_answer: 'b' },
    { question: 'Which tag is used to display a heading in HTML?', answers: { a: '<h1>', b: '<head>', c: '<title>', d: '<header>' }, correct_answer: 'a' },
    { question: 'What is the default value of the position property in CSS?', answers: { a: 'absolute', b: 'relative', c: 'fixed', d: 'static' }, correct_answer: 'd' },
    { question: 'Which HTML tag is used to define an unordered list?', answers: { a: '<ul>', b: '<ol>', c: '<list>', d: '<li>' }, correct_answer: 'a' },
    { question: 'Which HTML attribute specifies a unique identifier for an element?', answers: { a: 'class', b: 'id', c: 'name', d: 'type' }, correct_answer: 'b' },
    { question: 'How do you embed a video in HTML?', answers: { a: '<video src="video.mp4"></video>', b: '<embed src="video.mp4">', c: '<movie src="video.mp4">', d: '<media src="video.mp4">' }, correct_answer: 'a' },
    { question: 'Which tag is used to define a table header cell?', answers: { a: '<header>', b: '<th>', c: '<td>', d: '<head>' }, correct_answer: 'b' },
    { question: 'What is the purpose of the <iframe> tag?', answers: { a: 'To include another HTML page within the current page', b: 'To define a form', c: 'To specify metadata', d: 'To include CSS styles' }, correct_answer: 'a' },
    { question: 'Which HTML element defines the navigation links?', answers: { a: '<nav>', b: '<links>', c: '<menu>', d: '<navigation>' }, correct_answer: 'a' },
    { question: 'What is the default display value for most HTML elements?', answers: { a: 'inline', b: 'block', c: 'flex', d: 'none' }, correct_answer: 'b' },
    { question: 'Which tag is used to include an external stylesheet?', answers: { a: '<link rel="stylesheet" href="styles.css">', b: '<style src="styles.css">', c: '<script src="styles.css">', d: '<import href="styles.css">' }, correct_answer: 'a' },
    { question: 'Which tag is used to define a form in HTML?', answers: { a: '<form>', b: '<input>', c: '<field>', d: '<submit>' }, correct_answer: 'a' },
    { question: 'What is the use of the <div> tag in HTML?', answers: { a: 'To define a division or section in a document', b: 'To define a header', c: 'To create a hyperlink', d: 'To add a comment' }, correct_answer: 'a' },
    { question: 'How do you specify the character encoding in HTML?', answers: { a: '<meta charset="UTF-8">', b: '<encoding="UTF-8">', c: '<meta type="charset" value="UTF-8">', d: '<charset="UTF-8">' }, correct_answer: 'a' }
  ],
  css: [
    { question: 'What does CSS stand for?', answers: { a: 'Cascading Style Sheets', b: 'Creative Style Sheets', c: 'Computer Style Sheets', d: 'Cascading Sheet Styles' }, correct_answer: 'a' },
    { question: 'Which property is used to change the background color?', answers: { a: 'color', b: 'bgcolor', c: 'background-color', d: 'background' }, correct_answer: 'c' },
    { question: 'How do you select an element with id "header" in CSS?', answers: { a: '#header', b: '.header', c: 'header', d: '*header' }, correct_answer: 'a' },
    { question: 'Which property is used to change the font size in CSS?', answers: { a: 'text-size', b: 'font-style', c: 'font-size', d: 'text-style' }, correct_answer: 'c' },
    { question: 'What is the correct CSS syntax to make the font color red?', answers: { a: 'color: red;', b: 'font-color: red;', c: 'text-color: red;', d: 'font: color red;' }, correct_answer: 'a' },
    { question: 'Which property is used to add space between the content and border of an element?', answers: { a: 'margin', b: 'padding', c: 'border-spacing', d: 'gap' }, correct_answer: 'b' },
    { question: 'How do you make a list item horizontal in CSS?', answers: { a: 'list-style-type: horizontal;', b: 'display: inline;', c: 'list-style: horizontal;', d: 'display: block;' }, correct_answer: 'b' },
    { question: 'What is the default value of the display property?', answers: { a: 'inline', b: 'block', c: 'flex', d: 'grid' }, correct_answer: 'b' },
    { question: 'How do you center a block element horizontally in CSS?', answers: { a: 'text-align: center;', b: 'margin: auto;', c: 'align: center;', d: 'center: block;' }, correct_answer: 'b' },
    { question: 'Which CSS property controls the text size?', answers: { a: 'text-size', b: 'font-size', c: 'text-style', d: 'font-style' }, correct_answer: 'b' },
    { question: 'How do you apply a border to an element in CSS?', answers: { a: 'border: 1px solid black;', b: 'border-width: 1px;', c: 'border-style: solid;', d: 'outline: 1px solid black;' }, correct_answer: 'a' },
    { question: 'Which property is used to control the spacing between lines of text?', answers: { a: 'line-height', b: 'letter-spacing', c: 'text-spacing', d: 'word-spacing' }, correct_answer: 'a' },
    { question: 'What does the z-index property do?', answers: { a: 'Defines the stacking order of elements', b: 'Sets the opacity of an element', c: 'Aligns elements horizontally', d: 'Controls the display of elements' }, correct_answer: 'a' },
    { question: 'How can you apply a style to multiple elements at once?', answers: { a: 'By using a comma-separated list of selectors', b: 'By using multiple <style> tags', c: 'By defining multiple classes', d: 'By applying inline styles to each element' }, correct_answer: 'a' },
    { question: 'What is the correct way to use the CSS flexbox layout?', answers: { a: 'display: flex;', b: 'display: box;', c: 'layout: flex;', d: 'align: flex;' }, correct_answer: 'a' },
    { question: 'How do you change the text color of a specific element?', answers: { a: 'color: red;', b: 'text-color: red;', c: 'font-color: red;', d: 'foreground-color: red;' }, correct_answer: 'a' },
    { question: 'Which property is used to hide an element in CSS?', answers: { a: 'visibility: hidden;', b: 'display: none;', c: 'opacity: 0;', d: 'remove: true;' }, correct_answer: 'b' },
    { question: 'What is the purpose of media queries in CSS?', answers: { a: 'To apply styles based on device characteristics', b: 'To define external stylesheets', c: 'To include JavaScript', d: 'To create animations' }, correct_answer: 'a' }
  ],
  javascript: [
    { question: 'What is the output of console.log(2 + 2)?', answers: { a: '4', b: '22', c: 'Error', d: 'undefined' }, correct_answer: 'a' },
    { question: 'How do you declare a variable in JavaScript?', answers: { a: 'var myVar;', b: 'variable myVar;', c: 'myVar :=;', d: 'define myVar;' }, correct_answer: 'a' },
    { question: 'Which of the following is not a valid data type in JavaScript?', answers: { a: 'string', b: 'boolean', c: 'integer', d: 'object' }, correct_answer: 'c' },
    { question: 'What is the correct way to create a function in JavaScript?', answers: { a: 'function myFunction() {}', b: 'create function myFunction() {}', c: 'def myFunction() {}', d: 'function: myFunction() {}' }, correct_answer: 'a' },
    { question: 'How do you add an element to the end of an array in JavaScript?', answers: { a: 'array.push(element);', b: 'array.add(element);', c: 'array.append(element);', d: 'array.insert(element);' }, correct_answer: 'a' },
    { question: 'Which method is used to remove the last element from an array?', answers: { a: 'pop()', b: 'delete()', c: 'remove()', d: 'shift()' }, correct_answer: 'a' },
    { question: 'What is the purpose of the “this” keyword in JavaScript?', answers: { a: 'Refers to the object that owns the method', b: 'Refers to the global object', c: 'Refers to the function itself', d: 'Refers to the parent object' }, correct_answer: 'a' },
    { question: 'What is a closure in JavaScript?', answers: { a: 'A function that retains access to its lexical scope', b: 'A function that does not execute', c: 'An object that inherits from another object', d: 'A function that creates a new scope' }, correct_answer: 'a' },
    { question: 'How do you define a JavaScript object?', answers: { a: 'var obj = {};', b: 'var obj = ();', c: 'var obj = [];', d: 'var obj = "";' }, correct_answer: 'a' },
    { question: 'What does “NaN” stand for in JavaScript?', answers: { a: 'Not a Number', b: 'Not a Name', c: 'New and Novel', d: 'Not a Null' }, correct_answer: 'a' },
    { question: 'Which operator is used to compare two values for equality in JavaScript?', answers: { a: '==', b: '=', c: '===', d: '=>' }, correct_answer: 'c' },
    { question: 'What is the output of typeof NaN?', answers: { a: 'number', b: 'undefined', c: 'object', d: 'NaN' }, correct_answer: 'a' },
    { question: 'Which function is used to parse a string into an integer?', answers: { a: 'parseInt()', b: 'parseFloat()', c: 'toInteger()', d: 'convertToInteger()' }, correct_answer: 'a' },
    { question: 'How do you handle exceptions in JavaScript?', answers: { a: 'try...catch', b: 'throw...catch', c: 'error...handle', d: 'exception...try' }, correct_answer: 'a' },
    { question: 'What does the “map” method do in JavaScript?', answers: { a: 'Creates a new array with the results of calling a provided function on every element', b: 'Filters the elements of an array', c: 'Sorts the elements of an array', d: 'Finds a specific element in an array' }, correct_answer: 'a' },
    { question: 'How can you merge two arrays in JavaScript?', answers: { a: 'array1.concat(array2);', b: 'array1.merge(array2);', c: 'array1.append(array2);', d: 'array1.join(array2);' }, correct_answer: 'a' },
    { question: 'What is the purpose of the “async” keyword in JavaScript?', answers: { a: 'To declare a function as asynchronous', b: 'To execute a function synchronously', c: 'To create a new thread', d: 'To handle errors' }, correct_answer: 'a' },
    { question: 'What does “===” do in JavaScript?', answers: { a: 'Compares two values for equality and type', b: 'Assigns a value to a variable', c: 'Compares two values for inequality', d: 'Compares two values for equality' }, correct_answer: 'a' }
  ],
  c: [
    { question: 'What is the correct syntax for a single-line comment in C?', answers: { a: '/* comment */', b: '// comment', c: '# comment', d: '/* comment' }, correct_answer: 'b' },
    { question: 'What is the output of printf("%d", 5 + 3);?', answers: { a: '8', b: '5 + 3', c: 'Error', d: 'undefined' }, correct_answer: 'a' },
    { question: 'Which function is used to allocate memory dynamically in C?', answers: { a: 'malloc()', b: 'alloc()', c: 'new()', d: 'malloc_memory()' }, correct_answer: 'a' },
    { question: 'What is the correct syntax for a multi-line comment in C?', answers: { a: '/* comment */', b: '// comment', c: '# comment', d: '/* comment' }, correct_answer: 'a' },
    { question: 'How do you declare a function in C?', answers: { a: 'returnType functionName(parameters) {}', b: 'function returnType functionName(parameters) {}', c: 'functionName(parameters) returnType {}', d: 'returnType functionName {}' }, correct_answer: 'a' },
    { question: 'Which of the following is not a valid data type in C?', answers: { a: 'int', b: 'float', c: 'string', d: 'boolean' }, correct_answer: 'd' },
    { question: 'What is the purpose of the “return” statement in C?', answers: { a: 'To return a value from a function', b: 'To end the program', c: 'To define a function', d: 'To initialize variables' }, correct_answer: 'a' },
    { question: 'What does the “void” keyword specify in C?', answers: { a: 'A function that does not return a value', b: 'A function that returns an integer', c: 'A pointer to an integer', d: 'A character type' }, correct_answer: 'a' },
    { question: 'Which function is used to read a string from the user in C?', answers: { a: 'scanf()', b: 'read()', c: 'gets()', d: 'input()' }, correct_answer: 'a' },
    { question: 'How do you include a header file in C?', answers: { a: '#include <filename>', b: '#include "filename"', c: '#import <filename>', d: '#include filename' }, correct_answer: 'b' },
    { question: 'What is the output of the following code: int a = 5; int b = a++; printf("%d", b);?', answers: { a: '5', b: '6', c: 'Error', d: 'undefined' }, correct_answer: 'a' },
    { question: 'Which operator is used to access a member of a structure in C?', answers: { a: '.', b: '->', c: '*', d: '&' }, correct_answer: 'a' },
    { question: 'How do you declare a constant in C?', answers: { a: '#define CONSTANT_NAME value', b: 'const type CONSTANT_NAME = value', c: 'constant type CONSTANT_NAME = value', d: 'value CONSTANT_NAME = const type' }, correct_answer: 'a' },
    { question: 'Which of the following is used to allocate memory for an array of integers in C?', answers: { a: 'malloc(size * sizeof(int))', b: 'allocate(size * sizeof(int))', c: 'new(size * sizeof(int))', d: 'array(size * sizeof(int))' }, correct_answer: 'a' },
    { question: 'What is the purpose of the “#include” directive in C?', answers: { a: 'To include the contents of a header file', b: 'To define a macro', c: 'To include a library', d: 'To initialize variables' }, correct_answer: 'a' }
  ],
  cpp: [
    { question: 'What does the "C++" name stand for?', answers: { a: 'C with Classes', b: 'C with Objects', c: 'C with Extensions', d: 'C Plus Plus' }, correct_answer: 'd' },
    { question: 'Which symbol is used to denote comments in C++?', answers: { a: '//', b: '/* */', c: '#', d: ';;' }, correct_answer: 'a' },
    { question: 'How do you declare a class in C++?', answers: { a: 'class MyClass {};', b: 'class MyClass() {};', c: 'MyClass class {};', d: 'define class MyClass {}' }, correct_answer: 'a' },
    { question: 'Which of these is a C++ standard library for input and output?', answers: { a: '<iostream>', b: '<input>', c: '<output>', d: '<stream>' }, correct_answer: 'a' },
    { question: 'How do you create an object of a class in C++?', answers: { a: 'MyClass obj;', b: 'object MyClass;', c: 'new MyClass();', d: 'create MyClass obj;' }, correct_answer: 'a' },
    { question: 'What is the purpose of the `public` keyword in C++?', answers: { a: 'To define public members of a class', b: 'To define private members of a class', c: 'To access private members of a class', d: 'To define a function' }, correct_answer: 'a' },
    { question: 'What does the `virtual` keyword indicate in C++?', answers: { a: 'A virtual function', b: 'A virtual class', c: 'A virtual object', d: 'A virtual variable' }, correct_answer: 'a' },
    { question: 'Which of these operators is used for dynamic memory allocation in C++?', answers: { a: 'new', b: 'malloc', c: 'alloc', d: 'resize' }, correct_answer: 'a' },
    { question: 'What is the difference between `public` and `private` access specifiers in C++?', answers: { a: 'Public members are accessible from outside the class, private members are not', b: 'Private members are accessible from outside the class, public members are not', c: 'Public members are accessible only within the class, private members are not', d: 'There is no difference' }, correct_answer: 'a' },
    { question: 'How do you handle exceptions in C++?', answers: { a: 'try {} catch {}', b: 'catch {} try {}', c: 'error {}', d: 'exception {}' }, correct_answer: 'a' },
    { question: 'What is the purpose of constructors in C++?', answers: { a: 'To initialize objects of a class', b: 'To destruct objects of a class', c: 'To overload operators', d: 'To handle exceptions' }, correct_answer: 'a' },
    { question: 'Which keyword is used to prevent a class from being inherited in C++?', answers: { a: 'final', b: 'static', c: 'const', d: 'private' }, correct_answer: 'a' },
    { question: 'What is operator overloading in C++?', answers: { a: 'Defining multiple functions with the same name but different parameters', b: 'Changing the behavior of operators for user-defined types', c: 'Creating multiple operators for a single type', d: 'Overriding operators in derived classes' }, correct_answer: 'b' },
    { question: 'Which of these is a valid way to initialize a list in C++11?', answers: { a: 'std::list<int> myList = {1, 2, 3};', b: 'std::list<int> myList = (1, 2, 3);', c: 'std::list<int> myList = [1, 2, 3];', d: 'std::list<int> myList = list(1, 2, 3);' }, correct_answer: 'a' },
    { question: 'What is the `const` keyword used for in C++?', answers: { a: 'To define constants', b: 'To define a class', c: 'To restrict access to a member', d: 'To define a new type' }, correct_answer: 'a' },
    { question: 'How do you create a copy constructor in C++?', answers: { a: 'ClassName(const ClassName &obj);', b: 'ClassName(ClassName obj);', c: 'ClassName();', d: 'ClassName(ClassName &obj);' }, correct_answer: 'a' },
    { question: 'What is multiple inheritance in C++?', answers: { a: 'A class inheriting from more than one base class', b: 'A class inheriting from a single base class multiple times', c: 'A class inheriting from itself', d: 'A class inheriting from another derived class' }, correct_answer: 'a' },
    { question: 'How do you implement a pure virtual function in C++?', answers: { a: 'virtual void function() = 0;', b: 'void function() = pure;', c: 'pure virtual void function();', d: 'void function() = virtual;' }, correct_answer: 'a' }
  ],
  sql: [
    { question: 'Which SQL statement is used to retrieve data from a database?', answers: { a: 'SELECT', b: 'GET', c: 'FETCH', d: 'RETRIEVE' }, correct_answer: 'a' },
    { question: 'How do you insert a new row into a table in SQL?', answers: { a: 'INSERT INTO table_name (column1, column2) VALUES (value1, value2);', b: 'ADD INTO table_name (column1, column2) VALUES (value1, value2);', c: 'INSERT table_name VALUES (value1, value2);', d: 'PUT INTO table_name (column1, column2) VALUES (value1, value2);' }, correct_answer: 'a' },
    { question: 'Which SQL clause is used to filter the results of a query?', answers: { a: 'WHERE', b: 'FILTER', c: 'HAVING', d: 'SELECT' }, correct_answer: 'a' },
    { question: 'How do you update data in a table in SQL?', answers: { a: 'UPDATE table_name SET column1 = value1 WHERE condition;', b: 'MODIFY table_name SET column1 = value1 WHERE condition;', c: 'CHANGE table_name SET column1 = value1 WHERE condition;', d: 'ALTER table_name SET column1 = value1 WHERE condition;' }, correct_answer: 'a' },
    { question: 'Which SQL keyword is used to remove rows from a table?', answers: { a: 'DELETE', b: 'REMOVE', c: 'DROP', d: 'TRUNCATE' }, correct_answer: 'a' },
    { question: 'What does the `JOIN` clause do in SQL?', answers: { a: 'Combines rows from two or more tables based on a related column', b: 'Splits a table into multiple tables', c: 'Deletes rows from a table', d: 'Filters rows based on a condition' }, correct_answer: 'a' },
    { question: 'How do you select all columns from a table in SQL?', answers: { a: 'SELECT * FROM table_name;', b: 'SELECT all FROM table_name;', c: 'SELECT columns FROM table_name;', d: 'SELECT FROM table_name;' }, correct_answer: 'a' },
    { question: 'Which SQL function is used to find the number of rows in a result set?', answers: { a: 'COUNT()', b: 'SUM()', c: 'AVG()', d: 'MAX()' }, correct_answer: 'a' },
    { question: 'How do you create a new table in SQL?', answers: { a: 'CREATE TABLE table_name (column1 datatype, column2 datatype);', b: 'MAKE TABLE table_name (column1 datatype, column2 datatype);', c: 'NEW TABLE table_name (column1 datatype, column2 datatype);', d: 'DEFINE TABLE table_name (column1 datatype, column2 datatype);' }, correct_answer: 'a' },
    { question: 'Which SQL keyword is used to ensure that a column will not accept NULL values?', answers: { a: 'NOT NULL', b: 'NO NULL', c: 'REQUIRED', d: 'DEFAULT' }, correct_answer: 'a' },
    { question: 'How do you retrieve the highest value from a column in SQL?', answers: { a: 'SELECT MAX(column_name) FROM table_name;', b: 'SELECT HIGHEST(column_name) FROM table_name;', c: 'SELECT TOP(column_name) FROM table_name;', d: 'SELECT BIGGEST(column_name) FROM table_name;' }, correct_answer: 'a' },
    { question: 'Which clause is used to sort the result set in SQL?', answers: { a: 'ORDER BY', b: 'SORT BY', c: 'GROUP BY', d: 'DISTINCT' }, correct_answer: 'a' },
    { question: 'How do you create an index on a table in SQL?', answers: { a: 'CREATE INDEX index_name ON table_name (column_name);', b: 'MAKE INDEX index_name ON table_name (column_name);', c: 'NEW INDEX index_name ON table_name (column_name);', d: 'DEFINE INDEX index_name ON table_name (column_name);' }, correct_answer: 'a' },
    { question: 'Which SQL statement is used to retrieve unique values from a column?', answers: { a: 'SELECT DISTINCT column_name FROM table_name;', b: 'SELECT UNIQUE column_name FROM table_name;', c: 'SELECT DIFFERENT column_name FROM table_name;', d: 'SELECT ONLY column_name FROM table_name;' }, correct_answer: 'a' },
    { question: 'How do you rename a column in SQL?', answers: { a: 'ALTER TABLE table_name RENAME COLUMN old_name TO new_name;', b: 'RENAME COLUMN old_name TO new_name IN table_name;', c: 'CHANGE COLUMN old_name TO new_name IN table_name;', d: 'MODIFY COLUMN old_name TO new_name IN table_name;' }, correct_answer: 'a' },
    { question: 'Which keyword is used to define a default value for a column in SQL?', answers: { a: 'DEFAULT', b: 'SET', c: 'VALUE', d: 'INIT' }, correct_answer: 'a' },
    { question: 'How do you combine data from multiple tables in SQL?', answers: { a: 'Using JOIN clauses', b: 'Using UNION clauses', c: 'Using SELECT clauses', d: 'Using GROUP BY clauses' }, correct_answer: 'a' },
    { question: 'What does the `GROUP BY` clause do in SQL?', answers: { a: 'Groups rows that have the same values into summary rows', b: 'Sorts the result set', c: 'Filters the result set', d: 'Combines rows from multiple tables' }, correct_answer: 'a' },
    { question: 'Which SQL statement is used to modify the structure of an existing table?', answers: { a: 'ALTER TABLE', b: 'MODIFY TABLE', c: 'UPDATE TABLE', d: 'CHANGE TABLE' }, correct_answer: 'a' },
    { question: 'How do you prevent duplicate rows in a table in SQL?', answers: { a: 'Use UNIQUE constraint', b: 'Use PRIMARY KEY constraint', c: 'Use NOT NULL constraint', d: 'Use FOREIGN KEY constraint' }, correct_answer: 'a' }
  ],
  python: [
    { question: 'Which keyword is used to define a function in Python?', answers: { a: 'def', b: 'function', c: 'define', d: 'func' }, correct_answer: 'a' },
    { question: 'How do you create a list in Python?', answers: { a: 'my_list = []', b: 'my_list = ()', c: 'my_list = {}', d: 'my_list = list()' }, correct_answer: 'a' },
    { question: 'What is the output of `print(type(5))`?', answers: { a: '<class \'int\'>', b: '<class \'str\'>', c: '<class \'float\'>', d: '<class \'list\'>', }, correct_answer: 'a' },
    { question: 'Which method is used to add an element to a list in Python?', answers: { a: 'append()', b: 'add()', c: 'insert()', d: 'extend()' }, correct_answer: 'a' },
    { question: 'How do you concatenate two strings in Python?', answers: { a: 'string1 + string2', b: 'string1.concat(string2)', c: 'string1.append(string2)', d: 'string1.extend(string2)' }, correct_answer: 'a' },
    { question: 'Which operator is used for exponentiation in Python?', answers: { a: '**', b: '^', c: 'exp', d: 'power' }, correct_answer: 'a' },
    { question: 'What is the output of `print(3 // 2)`?', answers: { a: '1', b: '1.5', c: '2', d: '0' }, correct_answer: 'a' },
    { question: 'How do you handle exceptions in Python?', answers: { a: 'try {} except {}', b: 'catch {} except {}', c: 'handle {}', d: 'error {}' }, correct_answer: 'a' },
    { question: 'Which method is used to remove an element from a list in Python?', answers: { a: 'remove()', b: 'pop()', c: 'delete()', d: 'discard()' }, correct_answer: 'a' },
    { question: 'How do you define a class in Python?', answers: { a: 'class MyClass:', b: 'def MyClass:', c: 'class MyClass {}', d: 'define MyClass:' }, correct_answer: 'a' },
    { question: 'What is the purpose of the `self` keyword in Python?', answers: { a: 'Refers to the instance of the class', b: 'Defines a class method', c: 'Accesses the class itself', d: 'Creates a new instance' }, correct_answer: 'a' },
    { question: 'How do you create a dictionary in Python?', answers: { a: 'my_dict = {}', b: 'my_dict = []', c: 'my_dict = dict()', d: 'my_dict = set()' }, correct_answer: 'a' },
    { question: 'Which function is used to get the length of a list in Python?', answers: { a: 'len()', b: 'length()', c: 'size()', d: 'count()' }, correct_answer: 'a' },
    { question: 'How do you access the first element of a list in Python?', answers: { a: 'my_list[0]', b: 'my_list(0)', c: 'my_list.first()', d: 'my_list.get(0)' }, correct_answer: 'a' },
    { question: 'Which method is used to sort a list in Python?', answers: { a: 'sort()', b: 'order()', c: 'sorted()', d: 'arrange()' }, correct_answer: 'a' },
    { question: 'How do you import a module in Python?', answers: { a: 'import module_name', b: 'include module_name', c: 'use module_name', d: 'require module_name' }, correct_answer: 'a' },
    { question: 'What does the `range()` function do in Python?', answers: { a: 'Generates a sequence of numbers', b: 'Creates a list', c: 'Defines a range of values', d: 'Generates a random number' }, correct_answer: 'a' },
    { question: 'Which keyword is used to define an anonymous function in Python?', answers: { a: 'lambda', b: 'def', c: 'func', d: 'anonymous' }, correct_answer: 'a' },
    { question: 'How do you check if a key exists in a dictionary in Python?', answers: { a: 'key in my_dict', b: 'my_dict.has_key(key)', c: 'key.exists(my_dict)', d: 'my_dict.contains(key)' }, correct_answer: 'a' },
    { question: 'What is the purpose of the `__init__` method in Python classes?', answers: { a: 'Initializes a class instance', b: 'Defines a class', c: 'Handles exceptions', d: 'Creates a new class' }, correct_answer: 'a' }
  ],

  linux: [
    // Existing questions
    {
      question: 'Which command is used to list files in Linux?',
      answers: {
        a: 'list',
        b: 'ls',
        c: 'dir',
        d: 'show'
      },
      correct_answer: 'b'
    },
    {
      question: 'What does the `chmod` command do?',
      answers: {
        a: 'Change directory',
        b: 'Change file mode',
        c: 'Change owner',
        d: 'Change file name'
      },
      correct_answer: 'b'
    },
    {
      question: 'How do you check the current working directory?',
      answers: {
        a: 'pwd',
        b: 'cd',
        c: 'ls',
        d: 'dir'
      },
      correct_answer: 'a'
    },
    {
      question: 'Which command is used to display the content of a file in Linux?',
      answers: {
        a: 'cat',
        b: 'show',
        c: 'more',
        d: 'view'
      },
      correct_answer: 'a'
    },
    {
      question: 'How do you search for a text pattern in files using the command line?',
      answers: {
        a: 'grep',
        b: 'find',
        c: 'search',
        d: 'locate'
      },
      correct_answer: 'a'
    },
    {
      question: 'What is the purpose of the `ps` command?',
      answers: {
        a: 'Displays process status',
        b: 'Displays disk usage',
        c: 'Displays network connections',
        d: 'Displays system logs'
      },
      correct_answer: 'a'
    },
    {
      question: 'Which command is used to change the owner of a file?',
      answers: {
        a: 'chown',
        b: 'chmod',
        c: 'chgrp',
        d: 'change'
      },
      correct_answer: 'a'
    },
    {
      question: 'How do you display the manual page for a command?',
      answers: {
        a: 'man',
        b: 'help',
        c: 'info',
        d: 'doc'
      },
      correct_answer: 'a'
    },
    {
      question: 'Which command is used to find disk usage of files and directories?',
      answers: {
        a: 'du',
        b: 'df',
        c: 'ls',
        d: 'size'
      },
      correct_answer: 'a'
    },
    {
      question: 'What does the `top` command display?',
      answers: {
        a: 'Process information',
        b: 'File system usage',
        c: 'Network statistics',
        d: 'System logs'
      },
      correct_answer: 'a'
    },
    // Additional questions
    {
      question: 'Which command is used to move or rename files in Linux?',
      answers: {
        a: 'mv',
        b: 'move',
        c: 'rename',
        d: 'cp'
      },
      correct_answer: 'a'
    },
    {
      question: 'What is the function of the `rm` command?',
      answers: {
        a: 'Remove files or directories',
        b: 'Rename files or directories',
        c: 'Read files',
        d: 'Modify files'
      },
      correct_answer: 'a'
    },
    {
      question: 'Which command is used to copy files and directories?',
      answers: {
        a: 'cp',
        b: 'copy',
        c: 'clone',
        d: 'mv'
      },
      correct_answer: 'a'
    },
    {
      question: 'How do you display the last few lines of a file?',
      answers: {
        a: 'tail',
        b: 'head',
        c: 'show',
        d: 'more'
      },
      correct_answer: 'a'
    },
    {
      question: 'What does the `df` command display?',
      answers: {
        a: 'Disk space usage',
        b: 'File content',
        c: 'Directory structure',
        d: 'System information'
      },
      correct_answer: 'a'
    },
    {
      question: 'Which command is used to create a new directory?',
      answers: {
        a: 'mkdir',
        b: 'newdir',
        c: 'create',
        d: 'dir'
      },
      correct_answer: 'a'
    },
    {
      question: 'What does the `find` command do?',
      answers: {
        a: 'Search for files and directories',
        b: 'List all files',
        c: 'Display file content',
        d: 'Show disk usage'
      },
      correct_answer: 'a'
    },
    {
      question: 'How do you display hidden files in a directory?',
      answers: {
        a: 'ls -a',
        b: 'ls -h',
        c: 'ls -l',
        d: 'ls -d'
      },
      correct_answer: 'a'
    },
    {
      question: 'Which command is used to view the last few lines of a file in real-time?',
      answers: {
        a: 'tail -f',
        b: 'head -f',
        c: 'tail -r',
        d: 'more -f'
      },
      correct_answer: 'a'
    },
    {
      question: 'How do you view the current date and time in Linux?',
      answers: {
        a: 'date',
        b: 'time',
        c: 'clock',
        d: 'now'
      },
      correct_answer: 'a'
    }
  ]
}