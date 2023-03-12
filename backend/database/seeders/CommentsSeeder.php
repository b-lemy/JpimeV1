<?php

namespace Database\Seeders;

use App\Models\Forum\Comment;
use Illuminate\Database\Seeder;

class CommentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     *
     * @return void
     */
    public function run()
    {
        Comment::factory()->times(30)->create();
    }
}
