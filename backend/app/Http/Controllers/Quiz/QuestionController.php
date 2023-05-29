<?php

namespace App\Http\Controllers\Quiz;

use App\Http\Controllers\Controller;
use App\Models\QuizModels\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class QuestionController extends Controller
{
    public function insertData(Request $request)
    {
//        $loggedIn = auth()->user();
        $responseData = $request->input('dataToBackend');

        Log::channel('process')->info($responseData );
        foreach ($responseData as $item) {
            Log::channel('process')->info($item );

            $question = new Question();
            $question->category = $item['category']; // Assign the values from the array to the model's properties
            $question->type = $item['type'];
            $question->difficulty = $item['difficulty'];
            $question->amount = '5';
            $question->quiz_id = '1';
            $question->save(); // Save the model to the database
        }


    }
}
