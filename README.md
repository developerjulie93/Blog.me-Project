# Back-End Programming using Koa web framework and MongoDB 
Implementation Back End System with Node.js using Koa web framework and MongoDB
To connect Koa and MongoDB, use mongoose ODM(Object Data Mapping) library.


Extra files
-------------------------------
# .eslintrc.json

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
    
# package.json

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

  
  
# .prettierrc

{
    "singleQuote": true,
    "semi": true,
    "useTabs": false,
    "tabWidth": 2,
    "trailingComma": "all",
    "printWidth": 80
}



# jsconfig.json
{
    "compilerOptions": {
        "target": "es6",
        "module": "es2015"
    },
    "include": ["src/**/*"]
}



