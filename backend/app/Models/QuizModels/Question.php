<?php

namespace App\Models\QuizModels;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    public function quiz()
    {
        return $this->belongsToMany(Quiz::class);
    }

    public function option()
    {
        return $this->hasMany(Option::class);
    }

}
