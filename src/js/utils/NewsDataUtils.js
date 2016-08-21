
import NewsActionCreators from '../actions/NewsActionCreators';
import XMLHttpUtils from './XMLHttpUtils';

var NEWS_URI = 'http://10.39.157.250/?json=get_recent_posts';

function parseNews(str) {
  if (!str) {
    return [];
  }

  var json = JSON.parse(str);
  var list = json.posts.map(function (i) {
    return {
      id: i.id,
      title: i.title,
      text: i.excerpt,
      date: i.date,
      link: i.url
    };
  });

  return list;
}

export default {

  getLatestNews: function() {

    // load news from URI
    XMLHttpUtils.loadUri(NEWS_URI, function (res) {

      // parse news
      var news = parseNews(res);

      // pass news to the dispatcher
      NewsActionCreators.receiveAll(news);
    });
  },

  getFakeNews: function() {
    var res = {
      "status": "ok",
      "count": 1,
      "count_total": 1,
      "pages": 1,
      "posts": [
        {
          "id": 1,
          "type": "post",
          "slug": "hello-world",
          "url": "http:\/\/localhost\/wordpress\/?p=1",
          "title": "Hello world!",
          "title_plain": "Hello world!",
          "content": "<p>Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!<\/p>\n",
          "excerpt": "Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!\n",
          "date": "2009-11-11 12:50:19",
          "modified": "2009-11-11 12:50:19",
          "categories": [],
          "tags": [],
          "author": {
            "id": 1,
            "slug": "admin",
            "name": "admin",
            "first_name": "",
            "last_name": "",
            "nickname": "",
            "url": "",
            "description": ""
          },
          "comments": [
            {
              "id": 1,
              "name": "Mr WordPress",
              "url": "http:\/\/wordpress.org\/",
              "date": "2009-11-11 12:50:19",
              "content": "<p>Hi, this is a comment.<br \/>To delete a comment, just log in and view the post's comments. There you will have the option to edit or delete them.<\/p>\n",
              "parent": 0
            }
          ],
          "comment_count": 1,
          "comment_status": "open"
        }
      ]
    };

    // parse news
    var news = parseNews(JSON.stringify(res));

    // pass news to the dispatcher
    NewsActionCreators.receiveAll(news);
  }
};
