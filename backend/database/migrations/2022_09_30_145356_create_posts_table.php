<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table ->foreignId("user_id")->constrained()->cascadeOnDelete();
            $table ->string("title");
            $table ->string("body");
            $table ->string("thumbnail");
            $table ->string('slug')->unique();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
