<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForgotRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ResetRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::User();
            $AToken = $user->createToken('token')->accessToken;
//            $expiresAt = now()->addDays(1); // set expiration time to 7 days from now
//            $token = $request->user()->token();
//            $token->expires_at = $expiresAt;
//            $token->save();
            Log::info($AToken, (array)$user);
            return \response([
                'token' => $AToken,
                'user' =>$user
            ]);
        }
        return response()->json([
            'message' => 'Invalid email or password'
        ], 401);
    }

    public function register(RegisterRequest $request)
    {
        Log::channel('process')->info($request );
        $user = User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'password' => Hash::make($request->input('password')),
        ]);
        return response($user, Response::HTTP_CREATED);
    }

    public function forgot(ForgotRequest $request)
    {
        $email = $request->input('email');
        $token = Str::random('1234');
        if (
            User::where('email', $email)->doesntExist()) {
            return response(['message' => 'User doesnt exists'], Response::HTTP_NOT_FOUND);
        }
        DB::table('password_resets')->insert(
            [
                'email' => $email,
                'token' => $token
            ]
        );
        Mail::send("home", ['token' => $token], function (Message $message) use ($email) {
            $message->subject('reset password');
            $message->to($email);

        });
        return response([
            'message' => 'check your email'
        ]);

    }
    public function reset(ResetRequest $request)
    {
        $passwordReset = DB::table('password_resets')->where('token', $request->input('token'))->first();

        if (!$user = User::where('email', $passwordReset->email)->first()) {
            throw new NotFoundHttpException('user not found');
        }
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response([
            'message' => 'success'
        ]);


    }

    public function getAuthUser (){
        return auth()->user();
    }
}
