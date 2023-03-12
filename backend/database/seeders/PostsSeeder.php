<?php

namespace Database\Seeders;

use App\Models\Forum\Post;
use Illuminate\Database\Seeder;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::factory()->times(10)->create();
    }
}
