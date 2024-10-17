<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RepresentativeRequest;
use App\Repositories\RepresentativeRepository;
use Illuminate\Support\Facades\Log;

class RepresentativeController extends Controller
{
    public function read()
    {
        $filters = request()->only(['cityId']);
        return response()->json([
            'success' => true,
            'representatives' => RepresentativeRepository::read($filters)
        ], 201);
    }

    public function store(RepresentativeRequest $representativeRequest)
    {
        try {
            $representative = RepresentativeRepository::create($representativeRequest->validated());
            return response()->json([
                'success' => true,
                'message' => 'Representante criado com sucesso!',
                'representative' => $representative
            ], 201);
        } catch (\Exception $e) {
            Log::error('Erro ao cadastrar Representante: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Erro ao cadastrar Representante, tente novamente mais tarde.'
            ], 500);
        }
    }
}
