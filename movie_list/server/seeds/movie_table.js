/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie_data').del()
  await knex('movie_data').insert([
    {id: 1, movie_title: 'Gone with the Wind', director: 'Victor Fleming', release_year: '1939', worldwide_gross: '1,895,421,694', watched: false},
    {id: 2, movie_title: 'Star Wars: Episode IV - A New Hope', director: 'George Lucas', release_year: '1977', worldwide_gross: '1,668,979,715', watched: false},
    {id: 3, movie_title: 'The Sound of Music', director: 'Robert Wise', release_year: '1965', worldwide_gross: '1,335,086,324', watched: false},
    {id: 4, movie_title: 'E.T. the Extra-Terrestrial', director: 'Steven Spielberg', release_year: '1982', worldwide_gross: '1,329,174,791', watched: false},
    {id: 5, movie_title: 'Titanic', director: 'James Cameron', release_year: '1997', worldwide_gross: '1,270,101,626', watched: false},
    {id: 6, movie_title: 'The Ten Commandments', director: 'Cecil B, DeMille', release_year: '1956', worldwide_gross: '1,227,470,000', watched: false},
    {id: 7, movie_title: 'Jaws', director: 'Stevel Spielberg', release_year: '1975', worldwide_gross: '1,200,856,389', watched: false},
    {id: 8, movie_title: 'Doctor Zhivago', director: 'David Lean', release_year: '1965', worldwide_gross: '1,163,149,635', watched: false},
    {id: 9, movie_title: 'The Exorcist', director: 'William Friedkin', release_year: '1973', worldwide_gross: '1,036,314,504', watched: false},
    {id:10, movie_title: 'Snow White and the Seven Dwarfs', director: 'David Hand', release_year: '1937', worldwide_gross: '1,021,330,000', watched: false},
  ]);
};
