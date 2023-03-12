<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

//class Quiz extends Model
//{
//    use HasFactory;
//}

class Quiz extends Model {
    public function questions() {
        return $this->hasMany('App\Question');
    }

    public function attempts() {
        return $this->hasMany('App\QuizAttempt');
    }
}

class Question extends Model {
    public function quiz() {
        return $this->belongsTo('App\Quiz');
    }

    public function options() {
        return $this->hasMany('App\Option');
    }
}

class Option extends Model {
    public function question() {
        return $this->belongsTo('App\Question');
    }
}

class User extends Model {
    public function responses() {
        return $this->hasMany('App\Response');
    }
}

class Response extends Model {
    public function user() {
        return $this->belongsTo('App\User');
    }

    public function quiz() {
        return $this->belongsTo('App\Quiz');
    }
}

class QuizAttempt extends Model {
    public function user() {
        return $this->belongsTo('App\User');
    }

    public function quiz() {
        return $this->belongsTo('App\Quiz');
    }
}

Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->string('password');
    $table->timestamps();
});

Schema::create('quizzes', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('description');
    $table->integer('duration');
    $table->timestamps();
});

Schema::create('questions', function (Blueprint $table) {
    $table->id();
    $table->text('text');
    $table->enum('type', ['single_choice', 'multiple_choice', 'text']);
    $table->unsignedBigInteger('quiz_id');
    $table->foreign('quiz_id')->references('id')->on('quizzes')->onDelete('cascade');
    $table->timestamps();
});

Schema::create('options', function (Blueprint $table) {
    $table->id();
    $table->text('text');
    $table->boolean('is_correct');
    $table->unsignedBigInteger('question_id');
    $table->foreign('question_id')->references('id')->on('questions')->onDelete('cascade');
    $table->timestamps();
});

Schema::create('answers', function (Blueprint $table) {
    $table->id();
    $table->text('text')->nullable();
    $table->unsignedBigInteger('question_id');
    $table->foreign('question_id')->references('id')->on('questions')->onDelete('cascade');
    $table->unsignedBigInteger('user_id');
    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    $table->timestamps();
});

Schema::create('results', function (Blueprint $table) {
    $table->id();
    $table->integer('score');
    $table->unsignedBigInteger('quiz_id');
    $table->foreign('quiz_id')->references('id')->on('quizzes')->onDelete('cascade');
    $table->unsignedBigInteger('user_id');
    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    $table->timestamps();
});
