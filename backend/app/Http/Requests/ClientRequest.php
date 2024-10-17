<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'cpf' => 'required|string|max:14|unique:clients,cpf',
            'name' => 'required|string|max:255',
            'birthDate' => 'required|date|before:today',
            'gender' => 'required|string|max:10',
            'address' => 'required|string|max:255',
            'state' => 'required|string|max:2',
            'city' => 'required|integer|exists:cities,id'
        ];
    }

    public function messages()
    {
        return [
            'cpf.required' => 'O CPF é obrigatório.',
            'cpf.string' => 'O CPF deve ser uma string.',
            'cpf.max' => 'O CPF não pode ter mais de 14 caracteres.',
            'cpf.unique' => 'O CPF já está registrado.',
            'name.required' => 'O nome é obrigatório.',
            'name.string' => 'O nome deve ser uma string.',
            'name.max' => 'O nome não pode ter mais de 255 caracteres.',
            'birthDate.required' => 'A data de nascimento é obrigatória.',
            'birthDate.date' => 'A data de nascimento deve ser uma data válida.',
            'birthDate.before' => 'A data de nascimento deve ser uma data no passado.',
            'gender.required' => 'O gênero é obrigatório.',
            'gender.string' => 'O gênero deve ser uma string.',
            'gender.max' => 'O gênero não pode ter mais de 10 caracteres.',
            'address.required' => 'O endereço é obrigatório.',
            'address.string' => 'O endereço deve ser uma string.',
            'address.max' => 'O endereço não pode ter mais de 255 caracteres.',
            'state.required' => 'O estado é obrigatório.',
            'state.string' => 'O estado deve ser uma string.',
            'state.max' => 'O estado não pode ter mais de 2 caracteres.',
            'city.required' => 'A cidade é obrigatória.',
            'city.integer' => 'A cidade deve ser um número inteiro.',
            'city.exists' => 'A cidade selecionada é inválida.',
        ];
    }
}
