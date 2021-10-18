# Description

Jocker it is application, which gets jokes from jokeapi.com resourse and prints there into console.

In file "jocker.ts" describes class Jocker, consists few static methods:

getJoke() - it returns random joke of any category

getJokeCategories() - it returns array with categories

getJokeByCategory(category: string) - it returns random joke of specifed category

### Tests

This has two tests of getting the Nth number of jokes: synchronous and asynchronous.

Run synchronous test:
```bash
cd test
tsc test_sync.ts
node test_sync.js
```
Example output:
```text
...
default: 4256.205ms
```

Run asynchronous test:
```bash
cd test
tsc test_async.ts
node test_async.js
```
Example output:
```text
...
default: 547.826ms
```

Getting jokes in asynchronous mode is much faster than in synchronous mode.


### Get random joke

You need use parameter --category (-c) with value 'Any':
```bash
node index -c Any
```
Example output:
```text
I've got a really good UDP joke to tell you but I don’t know if you'll get it.
```

### Get random joke by category

Resource jokeapi.api can provide jokes in the specified categories: 
You need use parameter --category (-c) with relevant value:
```bash
node index -c Programming
```
Example output:
```text
What is a dying programmer's last program?

Goodbye, world!
```

If you specify a non-existent category, the program will display a list of possible categories
```bash
node index -c Git
```

Example output:
```text
Выбранная категория не существует!
Допустимые категории шуток: Any Misc Programming Dark Pun Spooky Christmas
```

# Installation

```bash
git clone https://github.com/1Lua/jocker.git

npm install
```