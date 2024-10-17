<?php

namespace App\Repositories;

use App\Models\Representative;

class RepresentativeRepository
{
    public static function read($filters = [])
    {
        $query = Representative::with('cities');
        if (!empty($filters['cityId'])) {
            $query->whereHas('cities', function ($query) use ($filters) {
                $query->where('cities.id', $filters['cityId']);
            });
        }

        return $query->get();
    }


    public static function create($data)
    {
        $representative = Representative::create([
            'name' => $data['name']
        ]);

        $cityNames = array_map(function ($city) {
            return $city['value'];
        }, $data['cities']);

        $cityIds = \App\Models\City::whereIn('name', $cityNames)->pluck('id');
        return $representative->cities()->attach($cityIds);
    }
}
