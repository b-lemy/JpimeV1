<?php

namespace App\Http\Controllers\Quiz;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class QuestionController extends Controller
{
    public function insertData(Request $request)
    {
        $responseData = $request->input('dataToBackend');
//        DB::beginTransaction();
//        return $request;
//        Log::info('Response from frontend:', ['responseData' => $request]);
        Log::info($responseData);

//        try {
//            // Insert data into the first table
//            $firstTableData = [
//                'column1' => $request->input('column1'),
//                'column2' => $request->input('column2'),
//                // ... other columns and values
//            ];
//
//            $firstTableId = DB::table('first_table')->insertGetId($firstTableData);
//
//            // Insert data into the second table
//            $secondTableData = [
//                'first_table_id' => $firstTableId,
//                'column3' => $request->input('column3'),
//                'column4' => $request->input('column4'),
//                // ... other columns and values
//            ];
//
//            DB::table('second_table')->insert($secondTableData);
//
//            DB::commit();
//
//            return response()->json(['message' => 'Data inserted successfully']);
//        } catch (\Exception $e) {
//            DB::rollback();
//            return response()->json(['message' => 'Data insertion failed'], 500);
//        }
    }
}
