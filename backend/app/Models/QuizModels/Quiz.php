<?php

namespace App\Models\QuizModels;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    public function question()
    {
        return $this->hasMany(Question::class);
    }

    public function attempt() {
        return $this->hasMany(QuizAttempt::class);
    }
}
