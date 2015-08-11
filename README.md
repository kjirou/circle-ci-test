# circle-ci-test

## Deploying & Testing
```bash
git clone git@github.com:kjirou/circle-ci-test.git
npm install
npm start
npm test
```

## !! 最新の selenium-webdriver が動かない !!
2015/04/13 現在、以下の環境で動かない

- mocha@2.2.4
- selenium-webdriver@2.45.1
- Mac OS X

mocha 側をダウングレードさせても変わらない 
一方で `selenium-webdriver@2.44.0` へ下げたら動いた

原因たぶんこれ: https://github.com/SeleniumHQ/selenium/issues/363
