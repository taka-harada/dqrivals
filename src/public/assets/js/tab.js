axios.get('/api?api_category=archive')
  .then(function (response) {
    appendData(response.data.entry);
  })
  .catch(function (error) {
    console.log(error);
  });



function appendData($entry) {

  $wrap = $('#tabpage');
  $wrapA = $('#tabpage1');
  $wrapB = $('#tabpage2');
  $wrapC = $('#tabpage3');
  $wrapD = $('#tabpage4');
  $wrapE = $('#tabpage5');

  $list = ''

  for($n=0; $n<$entry.length; $n++) {
    $news = $entry[$n];
    $fullDate = $news['createAt'];
    $date = $fullDate.split(' ')[0];
    $category = $news['infoCategoryName'];

    $list = '<li><span class="cate">'+$news['infoCategoryName']+'</span><span class="date">'+$date+'</span><a href="/news.html?id=' + $news['infoId'] + '">'+$news['infoTitle']+'</a></li>'
    $wrap.append($list);

    if($category == "お知らせ"){
      $list = '<li><span class="cate">'+$news['infoCategoryName']+'</span><span class="date">'+$date+'</span><a href="/news.html?id=' + $news['infoId'] + '">'+$news['infoTitle']+'</a></li>'
      $wrapA.append($list);
    } else if ($category == "キャンペーン") {
      $list = '<li><span class="cate">'+$news['infoCategoryName']+'</span><span class="date">'+$date+'</span><a href="/news.html?id=' + $news['infoId'] + '">'+$news['infoTitle']+'</a></li>'
      $wrapB.append($list);
    } else if ($category == "メンテナンス") {
      $list = '<li><span class="cate">'+$news['infoCategoryName']+'</span><span class="date">'+$date+'</span><a href="/news.html?id=' + $news['infoId'] + '">'+$news['infoTitle']+'</a></li>'
      $wrapC.append($list);
    } else if ($category == "そのた") {
      $list = '<li><span class="cate">'+$news['infoCategoryName']+'</span><span class="date">'+$date+'</span><a href="/news.html?id=' + $news['infoId'] + '">'+$news['infoTitle']+'</a></li>'
      $wrapD.append($list);
    } else if ($category == "イベント") {
      $list = '<li><span class="cate">'+$news['infoCategoryName']+'</span><span class="date">'+$date+'</span><a href="/news.html?id=' + $news['infoId'] + '">'+$news['infoTitle']+'</a></li>'
      $wrapE.append($list);
    }

  }

}


// ---------------------------
// 対象要素を取得
// ---------------------------
var tabs = document.getElementById('tabArea').getElementsByTagName('a');
var pages = document.getElementById('tabContent').getElementsByTagName('a');

// ---------------------------
// タブの切り替え処理
// ---------------------------
function changeTab() {
   // href属性値から対象のid名を抜き出す
   var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);

   // 指定のタブページだけを表示する
   for(var i=0; i<pages.length; i++) {
      if( pages[i].id != targetid ) {
         pages[i].style.display = "none";
      }
      else {
         pages[i].style.display = "block";
      }
   }

   // クリックされたタブを前面に表示する
   for(var i=0; i<tabs.length; i++) {
      tabs[i].style.zIndex = "0";
   }
   this.style.zIndex = "10";



  //$wrap.append($list, num);

   //ページ遷移しないようにfalseを返す
   return false;
}

// ---------------------------
// すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する
// ---------------------------
for(var i=0; i<tabs.length; i++) {
   tabs[i].onclick = changeTab;
}

// ---------------------------
// 最初は先頭のタブを選択しておく
// ---------------------------
tabs[0].onclick();
