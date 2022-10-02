<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResetRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'token' => 'required',
            'password' => 'required',
            'password_confirm' => 'required|same:password',
        ];
    }
}
