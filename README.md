## サンプルURL
* [一覧](http://dqrivals.hivelocity.me)
* [詳細](http://dqrivals.hivelocity.me/news.html?id=27739) 

Basic認証
* User: `dqrivals`
* Pass: `Cgtxh3t48xMq`

## ラッパーAPI
BRIDGE APIの認証とリクエストを行い返却されたJSONをそのまま返却するスクリプトです。
ニュースの一覧と詳細を取得のみできます。

* http://dqrivals.hivelocity.me/api/?api_category=archive
* http://dqrivals.hivelocity.me/api/?api_category=detail&newsId=27739

**対象スクリプト**
- `src/public/api/index.php`
- `src/dqauth/Client.php`

BRIDGE APIのリクエストクエリパラメーターを変更したい場合は、こちらのファイルを適宜編集してください。

このスクリプトはOAuth認証のため、PECL:OAuthモジュールが必要になるので、設置するサーバに導入されているか確認してください。

## クライアント
ラッパーAPIからニュースのデータを取得し、HTMLに表示しています。

**対象スクリプト**
- `src/public/assets/js/newsList.js`
- `src/public/assets/js/newsDetail.js`

## サンプルをローカルで確認する方法
こちらのサンプルはDockerで立ち上げ、確認することができます。
Macなどのローカル環境で確認したい場合は以下を実行してください。

```bash
# PHPの外部モジュールをインストール
$ cd src
$ composer install

# ソースのルートディレクトリに戻り、Dockerコンテナを起動
$ cd ../
$ dokcer-compose up -d --build
```