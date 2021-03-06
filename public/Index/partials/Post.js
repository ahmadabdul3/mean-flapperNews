<div class="page-header">
        <h3>
          <a ng-show="postsCtrl.post.link" href="{{postsCtrl.post.link}}">
            {{postsCtrl.post.title}}
          </a>
          <span ng-hide="postsCtrl.post.link">
            {{postsCtrl.post.title}}
          </span>
        </h3>
      </div>

      <div ng-repeat="comment in postsCtrl.post.comments | orderBy:'-upvotes'">
        <span class="glyphicon glyphicon-thumbs-up"
          ng-click="postsCtrl.incrementUpvotes(comment)"></span>
        {{comment.upvotes}} - by {{comment.author}}
        <span style="font-size:20px; margin-left:10px;">
          {{comment.body}}
        </span>
      </div>

        <h3>Add a new comment</h3>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="Comment" ng-model="postsCtrl.body"></input>
        </div>
        <button type="submit" class="btn btn-primary" ng-click="postsCtrl.addComment()">Post</button>