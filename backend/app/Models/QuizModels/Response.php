<?php

namespace App\Models\QuizModels;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    use HasFactory;

    public function quiz() {
        return $this->belongsTo(Quiz::class);
    }
}
