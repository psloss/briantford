/*
 * Serve JSON to our AngularJS client
 */
var data = {
    "posts": [
        {
            "title": "Doodle Dog",
            "text": "Doodle Dog is a good boy."
        },
        {
            "title": "Liz",
            "text": "Liz is a good girl as well."
},
]
};

exports.name = function (req, res) {
  var posts =[];
    data.posts.forEach(function(post, i){
        posts.push({
            id: i,
            title: post.title,
            text: post.text.substr(0, 50) + '...'
        });
    });
    res.json({
    name: posts
  });
};

exports.post = function (req, res){
    var id = req.params.id;
    if (id >= 0 && id < data.posts.length) {
    res.json({
        post: data.posts[id]
    });
} else {
    res.json(false);
}
};

// POST
exports.addPost = function (req, res) {
    data.posts.push(req.body);
    res.json(req.body);
};

// PUT
exports.editPost = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.posts.length) {
        data.posts[id] = req.body;
        res.json(true);
    } else {
        res.json(false);
    }
};

// DELETE
exports.deletePost = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.posts.length) {
        data.posts.splice(id, 1);
        res.json(true);
    } else {
        res.json(false);
    }
};