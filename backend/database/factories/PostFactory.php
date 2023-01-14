<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $title = fake()->unique()->realText(10);
        return [
            "user_id" => rand(1,10),
            "title" => $title,
            "body" => fake()->realText(150),
            "slug" =>Str::slug($title),


        ];
    }
}
