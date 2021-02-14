import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([ 
    { title: 'Lamps', image: 'lampadas.svg' },
    { title: 'Bateries', image: 'baterias.svg' },
    { title: 'Cardboard', image: 'papeis-papelao.svg' },
    { title: 'Eletronic devices', image: 'eletronicos.svg' },
    { title: 'Organic residue', image: 'organicos.svg' },
    { title: 'Cooking oil', image: 'oleo.svg' },
  ]);
}