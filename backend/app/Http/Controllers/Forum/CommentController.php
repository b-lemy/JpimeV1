<?php

namespace App\Http\Controllers\Forum;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
//    public function index($id)
//    {
//        $comments = Post::with('comments', 'comments.CommentReply')->find($id);
////        $users = Post::find(1);
//        return $comments;
//    }


    public function comment(Request $request, Post $post)
    {

         Comment::create([
            'user_id' => Auth::user()->id,
            'body' => $request->input('body'),
            'post_id' => $post->id,
            'parent_id' => null,
        ]);

//        return $comment;

    }

    public function commentReply(Request $request, Post $post, Comment $comment)
    {

        Comment::create([
            'user_id' => Auth::user()->id,
            'body' => $request->input('body'),
            'post_id' => $post->id,
            'parent_id' => $comment->id,
        ]);

//        return $commentReply;

    }


    public function destroy(Comment $comment)
    {
        //
    }
}
