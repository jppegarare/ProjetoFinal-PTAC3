import { NextResponse } from "next/server";

export const listaDeFilmes = [
    {
        id: 1,
        titulo: "Entre Facas e Segredos",
        imagem: "https://resizing.flixster.com/iVtUyJZCFCWAMGls9FMhVuXmwN0=/fit-in/80x126/v2/https://resizing.flixster.com/9siv752L7VqwwTJVHg1KENr6wlU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhmNTdjMmU2LTczODctNDUzOS05ODhjLWU0MDRhY2M4ZjMxMy53ZWJw",
        diretor: "Rian Johnson",
        anoEstreia: 2019,
        g,enero: "Mistério"
    }
    {
        id: 2,
        titulo: "Django Livre",
        imagem: "./public/django.jpg",
        diretor: "Quentin Tarantino",
        anoEstreia: 2013,
        genero: "Ação"
    }
];

export async function GET(){
    return NextResponse.json(listaDeFilmes)
}