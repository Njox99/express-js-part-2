## errror 1

```js

Njox@Nj0x0x MINGW64 C:/Users/Njox/Desktop/myapp
$ node main.js
C:\Users\Njox\Desktop\myapp\main.js:12
  console.log(`Example app listening on port ${port}`);
                                               ^

ReferenceError: port is not defined
    at Server.<anonymous> (C:\Users\Njox\Desktop\myapp\main.js:12:48)
    at Server.f (C:\Users\Njox\Desktop\myapp\node_modules\once\once.js:25:25)
    at Object.onceWrapper (node:events:630:28)
    at Server.emit (node:events:521:24)
    at emitListeningNT (node:net:2051:10)
    at process.processTicksAndRejections (node:internal/process/task_queues:89:21)

Node.js v24.16.0
```

Use PORT instead of port
