<?php

use App\Http\Controllers\Authentication\AuthController;
use App\Http\Controllers\Forum\CommentController;
use App\Http\Controllers\Forum\PostsController;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::get('/trial',function (){
//     return Hash::make('Mkombozi123');
// });

Route::post('login',[AuthController::class,'login']);
Route::post('register',[AuthController::class,'register']);

Route::middleware(['auth:api'])->group(function (){
    Route::get('getAuthUser',[AuthController::class,'getAuthUser']);
    Route::apiResource('posts' ,PostsController::class);
//    Route::get('/posts/{post}/comments', [CommentController::class, 'index']);
    Route::post('/posts/{post}/comments', [CommentController::class, 'comment']);
    Route::post('/posts/{post}/comments/{comment}/comments', [CommentController::class, 'commentReply']);

//    quiz


});





