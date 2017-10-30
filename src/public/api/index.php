<?php
require dirname(__FILE__).'/../../vendor/autoload.php';

use DQOAuth\APIClient;

const OAUTH_CONSUMER_KEY = 'WYoi1DdT9yLdS0Ek';
const OAUTH_CONSUMER_SECRET = '7Z93zNNL9Tl7jO9lB5JIh7BzV2wPsTWY';
const API_URL = 'http://test.restapi.sqex-bridge.jp';

$client = new APIClient(OAUTH_CONSUMER_KEY, OAUTH_CONSUMER_SECRET, API_URL);

if (isset($_GET["api_category"])) {
  switch ($_GET["api_category"]) {
    case 'archive':
      echo $client->getNewsList();
      break;
    case 'detail':
      if (isset($_GET["newsId"])) {
        echo $client->getNewsDetail($_GET["newsId"]);
      }
      break;
  }
} else {
  echo $client->getNewsList();
}
