<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class CommentController extends Controller
{

    public function index($id)
    {
        $comments = Post::with('comments','comments.CommentReply')->find($id);
//        $users = Post::find(1);
        return $comments;
    }


    public function create()
    {
        //
    }

    public function store(Request $request,Post $post)
    {

        $comment = Comment::create([
//            'user_id' => 2,
            'user_id' => Auth::user()->id,
            'body' => $request->input('body'),
            'post_id' => $post->id,
            'parent_id' => null,
        ]);

        return $comment;

    }

    public function commentReply(Request $request,Post $post ,Comment $comment)
    {

        $commentReply = Comment::create([
            'user_id' => 2,
//            'user_id' => Auth::user()->id,
            'body' => $request->input('body'),
            'post_id' => $post->id,
            'parent_id' => $comment->id,
        ]);

        return $commentReply;

    }


    public function show(Comment $comment)
    {
//        comments.CommentReply
    }


    public function edit(Comment $comment)
    {
        //
    }

    public function update(Request $request, Comment $comment)
    {
        //
    }

    public function destroy(Comment $comment)
    {
        //
    }
}
