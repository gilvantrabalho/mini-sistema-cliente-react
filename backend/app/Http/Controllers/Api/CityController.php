<?php

namespace App\Http\Controllers\Api;

use App\Enums\CityEnum;
use App\Http\Controllers\Controller;
use App\Models\City;
use App\Repositories\CityRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function read(): JsonResponse
    {
        return response()->json([
            'cities' => CityRepository::getByStatus(CityEnum::ATIVO->value)
        ]);
    }

    
}
