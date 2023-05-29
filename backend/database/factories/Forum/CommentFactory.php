<?php

namespace Database\Factories\Forum;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Forum\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $parent = [null , rand(1,10)];
        return [
            'post_id'=>rand(1,10),
            'user_id'=>rand(1,10),
            'parent_id' => $parent[rand(0,1)],
            'body'=>fake()->RealText(150),


        ];
    }
}
