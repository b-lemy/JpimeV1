<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{

    public function index()
    {
        $post = Post::with('comments.CommentReply')->get();
        return $post->toArray();

    }


    public function store(PostRequest $request)
    {
        $post = Post::create([
            'title' => $request->input('title'),
            'body' => $request->input('body'),
            'thumbnail' => $request->input('thumbnail'),

        ]);
        return response()->json([
            'message' => 'New post created'
        ]);


    }


    public function show($id)
    {
        Post::find($id);
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
