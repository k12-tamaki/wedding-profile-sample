# 起動方法

```
cd web
yarn dev
```

# ビルド

```
yarn build
```


MacOSにおけるフロントエンドの開発環境作成

# brew
> Mac用のパッケージ管理ソフト
```
brew list
```

下記のパッケージがあることを確認
> coreutils
>> GNUコマンドを使用するため

> jq
>> JSONを成形、絞り込みを行う
>> echo ‘[{“hoge”: “hoge”, “fuga”: “fuga"}]’ | jq

> xz
>> 圧縮、解答
>> xz -z hoge
>> xz -d hoge.xz

> wget
>> ファイルのダウンロード
>> wget -r http://………/download.zip

# nodejs

## nvm
### インストール
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```
```
vim ~/.bash_profile
```
下記を追加
```
export NVM_DIR=“$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

### バージョン確認
```
nvm --version
```
> 0.35.1

### アップデート
```
cd ~/.nvm
git pull origin master
```
> 一度termを立ち上げ直し。


## node
### バージョン確認
```
node --version
```
> v10.16.3

### インストール、アップデート
```
nvm install v10.16.3
nvm alias default v10.16.3
node --version
```
> v10.16.3


## npmのライブラリを確認
```
npm ls --depth=0 -g
```
> /Users/***/.nvm/versions/node/v10.16.3/lib  
> ├── npm@6.9.0  
> ├── serverless@1.53.0  
> └── yarn@1.19.0  

### npmが表示されない
```
npm install -g npm
```

### yarnが表示されない
```
npm install -g yarn
```

### serverlessが表示されない
```
npm install -g serverless
```
