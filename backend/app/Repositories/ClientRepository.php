<?php

namespace App\Repositories;

use App\Models\Client;
use Illuminate\Support\Collection;

class ClientRepository
{
    public static function read(array $filters = []): Collection
    {
        $query = Client::with('city');

        if (!empty($filters['birthDate'])) {
            $query->where('birthDate', $filters['birthDate']);
        }
        if (!empty($filters['city'])) {
            $query->whereHas('city', function ($q) use ($filters) {
                $q->where('name', 'like', '%' . $filters['city'] . '%');
            });
        }
        if (!empty($filters['cpf'])) {
            $query->where('cpf', 'like', '%' . $filters['cpf'] . '%');
        }
        if (!empty($filters['gender'])) {
            $query->where('gender', $filters['gender']);
        }
        if (!empty($filters['name'])) {
            $query->where('name', 'like', '%' . $filters['name'] . '%');
        }
        if (!empty($filters['state'])) {
            $query->where('state', $filters['state']);
        }

        return $query->get();
    }

    public static function create($data): Client
    {
        return Client::create([
            'cpf' => $data['cpf'],
            'name' => $data['name'],
            'birthDate' => $data['birthDate'],
            'gender' => $data['gender'],
            'address' => $data['address'],
            'state' => $data['state'],
            'city_id' => $data['city']
        ]);
    }

    public static function update($transaction, $data): int
    {
        return Client::whereId($transaction->id)
            ->update([
                'cpf' => $data['cpf'],
                'name' => $data['name'],
                'birthDate' => $data['birthDate'],
                'gender' => $data['gender'],
                'address' => $data['address'],
                'state' => $data['state'],
                'city_id' => $data['city'],
                //'representative_id',
            ]);
    }
}
