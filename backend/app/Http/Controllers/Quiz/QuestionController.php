<?php

namespace App\Http\Controllers\Quiz;

use App\Http\Controllers\Controller;
use App\Models\QuizModels\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class QuestionController extends Controller
{
    public function insertQuestion(Request $request)
    {
//        $loggedIn = auth()->user();
        $responseData = $request->input('dataToBackend');

        $arrayLength = count($responseData);


        Log::channel('process')->info($responseData, (array)$arrayLength);
        foreach ($responseData as $item) {
            $question = new Question();
            $question->category = $item['category']; // Assign the values from the array to the model's properties
            $question->type = $item['type'];
            $question->difficulty = $item['difficulty'];
            $question->amount = $arrayLength;
            $question->question = $item['question'];
            $question->quiz_id = '1';
            $question->save(); // Save the model to the database
        }


    }

    public function insertResults(Request $request)
    {
        $dataResults = $request->input('final');

        $loggedIn = auth()->user()->id;

        $currentDate = Carbon::now();

        Log::channel('process')->info($dataResults, array($loggedIn));

        DB::beginTransaction();
        try {
            DB::table('quiz_attempts')->insert([
                'score' => $dataResults,
                'quiz_id' => '1',
                'user_id' => $loggedIn,
                'created_at' => $currentDate,
                'updated_at' => $currentDate
            ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            // Handle the exception, log error, or display a message

        }
    }
}