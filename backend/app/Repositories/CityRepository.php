<?php

namespace App\Repositories;

use App\Models\City;
use Illuminate\Database\Eloquent\Collection;

class CityRepository
{
    public static function getByStatus(string $status): Collection
    {
        return City::whereStatus($status)->get();
    }
}
