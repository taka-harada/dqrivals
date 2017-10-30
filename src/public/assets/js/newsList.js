axios.get('/api?api_category=archive')
  .then(function (response) {
    appendData(response.data.entry);
  })
  .catch(function (error) {
    console.log(error);
  });


function appendData($entry) {
  $wrap = $('.js-news-list');
  $list = ''

  for($n=0; $n<$entry.length; $n++) {
    $news = $entry[$n];
    $fullDate = $news['createAt'];
    $date = $fullDate.split(' ')[0];
    if($news['infoCategoryName'] == "お知らせ"){
      $list += '<li><span class="cate">'+$news['infoCategoryName']+'</span><span class="date">'+$date+'</span><a href="/news.html?id=' + $news['infoId'] + '">'+$news['infoTitle']+'</a></li>'
    }

  }

  $wrap.append($list);
}
