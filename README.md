# Blog.me
Simple CRUD blog project

Front-End Programing using React.js, CSS
------------------------------------------------
Implementation UI components:  
1. Install Router -> link all pages  
2. Install Redux to control state   
   -define initalstate, action type  
   -define reducer (combine all reducer if you need)  
   -define store to apply reducer  
   -pass store as props using Provider  
3. Register / Login Authorized Form UI  
   -use Redux to control form state. pass type through props  
   
Code Structure:  
src   
    -components -> define button, auth form  
    -containers -> define LoginForm, RegisterForm with redux  
    -lib -> set styles (open source), middleware: redux-saga, API: define HTTP Method 
    -modules ->  define reducer module (action type, action function, reducer)  
    -pages -> create all pages (LoginPage, RegisterPage, PostListPage, PostPage, WritePage)  
    -index -> create store, BrowserRouter  
    -App -> set route all pages  



Back-End Programming using Koa web framework and MongoDB 
------------------------------------------------------------
Implementation Back End System with Node.js using Koa web framework and MongoDB  
To connect Koa and MongoDB, use mongoose ODM(Object Data Mapping) library.  
Use Postman program to test own APIs.  

Code Structure:  
src   
    -lib -> set middleware: checkloggedin, publish token  
    -model -> post/user: define each schema for DB, set static method, instance function  
    -api -> post/auth: HTTP Method, define CRUD, index: api.use(post)  
    -index -> export module main, use esm to use 'import'  
    -main -> link page (app.listen -> link port, app.use -> link router.use(api), mongoose -> link mongoDB   
      
      
# Extra files


 .eslintrc.json
-------------------------------

{  
    "env": {  
        "commonjs": true,  
        "es6": true,  
        "node": true  
    },  
    "extends": [  
        "eslint:recommended",  
        "prettierc",  
        "plugin:@typescript-eslint/eslint-recommended"  
    ],  
    "globals": {  
        "Atomics": "readonly",  
        "SharedArrayBuffer": "readonly"  
    },  
    "parser": "@typescript-eslint/parser",  
    "parserOptions": {  
        "ecmaVersion": 2018,  
        "sourceType": "module"  
    },  
    "plugins": [  
        "@typescript-eslint"  
    ],  
    "rules": {  
        "no-unused-vars": "warn",  
        "no-console": "off"  
    }  
}  
    
 package.json
-------------------------------
{  
  "name": "blog-backend",  
  "version": "1.0.0",  
  "main": "index.js",  
  "license": "MIT",  
  "dependencies": {  
    "dotenv": "^8.2.0",  
    "eslint-config-prettier": "^6.10.0",  
    "esm": "^3.2.25",  
    "koa": "^2.11.0",  
    "koa-bodyparser": "^4.2.1",  
    "koa-router": "^8.0.7",  
    "mongoose": "^5.8.11"  
  },  
  "devDependencies": {  
    "eslint": "^6.8.0",  
    "nodemon": "^2.0.2"  
  },  
  "scripts": {  
    "start": "node -r esm src",  
    "start:dev": "nodemon --watch src/ -r esm src/index.js"  
  }  
}  
 
  
  
 .prettierrc
-------------------------------

{  
    "singleQuote": true,  
    "semi": true,  
    "useTabs": false,  
    "tabWidth": 2,  
    "trailingComma": "all",  
    "printWidth": 80  
}  



 jsconfig.json
-------------------------------
{  
    "compilerOptions": {  
        "target": "es6",  
        "module": "es2015"  
    },  
    "include": ["src/**/*"]  
}  



.env
-------------------------------
PORT = 4000  
MONGO_URL = mongodb://localhost:27017/blog

