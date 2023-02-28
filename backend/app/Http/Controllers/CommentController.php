<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{

    public function index(Post $post)
    {
//        $users = Post::find(1);
//        return $users;
    }


    public function create()
    {
        //
    }


    public function store(Request $request, Post $post)
    {
        $request->validate([
            'body' => 'required'
        ]);

        return $post;

//        $comment = new Comment();
//        $comment->body = $request->input('body');
//        $comment->post()->associate($post);
//        $comment->save();
    }


    public function show(Comment $comment)
    {
        //
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
