<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ClientRequest;
use App\Models\Client;
use App\Repositories\ClientRepository;
use Illuminate\Support\Facades\Log;

class ClientController extends Controller
{
    public function read()
    {
        $filters = request()->only(['birthDate', 'city', 'cpf', 'gender', 'name', 'state']);
        return response()->json([
            'success' => true,
            'clients' => ClientRepository::read($filters)
        ], 201);
    }

    public function store(ClientRequest $clientRequest)
    {
        try {
            ClientRepository::create($clientRequest->validated());
            return response()->json([
                'success' => true,
                'message' => 'Cliente cadastrada com sucesso!'
            ], 201);
        } catch (\Exception $e) {
            Log::error('Erro ao cadastrar cliente: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Erro ao cadastrar cliente, tente novamente mais tarde.'
            ], 500);
        }
    }

    public function destroy(Client $client)
    {
        $client->delete();
        return response()->json([
            'success' => true,
            'message' => 'Cliente deletado com sucesso!'
        ], 201);
    }

    public function show(Client $client)
    {
        return response()->json([
            'success' => true,
            'client' => $client
        ], 201);
    }

    public function update(Request $request, Client $client) 
    {
        try {
            ClientRepository::update($client, $request->all());
            return response()->json([
                'success' => true,
                'message' => 'Cliente editado com sucesso!'
            ], 201);
        } catch (\Exception $e) {
            Log::error('Erro ao editar cliente: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Erro ao editar cliente, tente novamente mais tarde. ' . $e->getMessage()
            ], 500);
        }
    }
}
