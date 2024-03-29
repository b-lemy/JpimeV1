<?php

namespace App\Http\Controllers\Forum;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Models\Forum\Post;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PostsController extends Controller
{
    public function index()
    {
//        return Post::with("author")->get();
        $post = Post::with("author")->latest()->get();
        return PostResource::collection($post);
    }
    public function store(PostRequest $request)
    {
        $title = $request->input('title');
        $post = Post::create([
            'user_id'=>Auth::user()->id,
            'title' => $title,
            'body' => $request->input('body'),
            'thumbnail' => $request->input('thumbnail'),
            'slug' => Str::slug($title)

        ]);
        return response()->json([
            'message' => 'New post created'
        ]);
    }
    public function show($id)
    {
        $post = Post::with(['comments.CommentReply',
            'comments.CommentReply.CommentReply', //to be tested tomorrow 7/03/2023 and it worked....
            'comments.CommentReply.CommentReply.CommentReply',
            'comments.CommentReply.user',
            'comments.user',
            'author'
        ])->latest()->find($id);
        return $post;
    }
    public function update(PostRequest $request, Post $post)
    {
        $post->update($request->all());
        return $post;
    }
    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json([
            'message' => 'Post Deleted'
        ]);
    }
}
