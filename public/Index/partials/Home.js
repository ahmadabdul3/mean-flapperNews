<div class="page-header">
        <h1>Flapper News</h1>
      </div>
      
      <div ng-repeat="post in indexCtrl.getPosts() | orderBy:'-upvotes'">
        <span class="glyphicon glyphicon-thumbs-up"
          ng-click="indexCtrl.incrementUpvotesForPost(post)"></span>
        {{post.upvotes}}
        <span style="font-size:20px; margin-left:10px;">
          <a ng-show="post.link" href="{{post.link}}">
            {{post.title}}
          </a>
          <span ng-hide="post.link">
            {{post.title}}
          </span>
        </span>
        <span>
            <a href="#/posts/{{$index}}">Comments</a>
        </span>
      </div>

        <h3>Add a new post</h3>

        <div class="form-group">
          <input type="text"
            class="form-control"
            placeholder="Title"
            ng-model="indexCtrl.title"></input>
        </div>
        <div class="form-group">
          <input type="text"
          class="form-control"
          placeholder="Link"
          ng-model="indexCtrl.link"></input>
        </div>
        <button class="btn btn-primary" ng-click="indexCtrl.addPost()">Post</button>