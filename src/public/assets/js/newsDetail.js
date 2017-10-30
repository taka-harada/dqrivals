$param = window.location.search;
$newsID = $param.split('id=')[1];
$apiURL = '/api?api_category=detail&newsId=' + $newsID;

axios.get($apiURL)
  .then(function (response) {
    appendData(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  

function appendData($entry) {
  $('.js-news-detail').show();
  
  $('.js-news-title').append($entry['infoTitle']);
  $('.js-news-category').append($entry['infoCategoryName']);
  $('.js-news-body').append($entry['infoBody']);
}