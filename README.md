# Node.js REST APIs.

## Prerequisites
* node.js 10+

## Getting started
1. ```npm install```
2. ```npm run prod```
3. ```npm run dev```

## Functional Summary

The application expose restful endpoints that will parse data (passed in the request body) and return the value back to the client. This API will have two versions and depending on the version endpoint, the parsing of the data will return a different value back to the client. Used TypeScript interfaces so the code assumes the design / object properties.

### The API urls:

  ```
  http://localhost:5000/api/v1/parse
  http://localhost:5000/api/v2/parse
  ```

### The Request Data

  ```
  POST Data = { 
      "data": "JOHN0000MICHAEL0009994567" 
      }
  ```

### The Response Data

  1. The API version 1,

  ```
  Response Data = { 
      statusCode: 200, 
      data: { 
          firstName: "JOHN0000", 
          lastName: "MICHAEL000", 
          clientId: "9994567" 
          }
    }
  ``` 

  2. The API version 2,

  ```
  Response Data =  { 
      statusCode: 200, 
      data: { 
          firstName: "JOHN", 
          lastName: "MICHAEL", 
          clientId: "999-4567" 
          } 
    }
  ```
  Note: attached screenshots for reference : /screenshots

### Thank you,
```
Shyam Kumar S
Software Engineer
email: shyam.sarathkumar@gmail.com

```