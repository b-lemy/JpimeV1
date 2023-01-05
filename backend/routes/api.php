<?php

use App\Http\Controllers\Authentication\AuthController;
use App\Http\Controllers\PostsController;
use Illuminate\Http\Request;
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
Route::post('/trial',function (){
    return 'Something';

});
Route::post('login',[AuthController::class,'login']);
Route::post('register',[AuthController::class,'register']);


Route::apiResource('posts' ,PostsController::class);
