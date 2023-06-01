<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class QuizAttempts extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'created_at' =>Carbon::parse($this->created_at)->diffForHumans(),
            'quiz' =>$this->quiz_id,
            'score' =>($this->score *100),


        ];

    }
}
