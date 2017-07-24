exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function() {
      // Inserts seed entries
      return knex('games').insert([{
          name: 'World of Warcraft',
          publisher: 'Blizzard',
          release: '2004'
        },
        {
          name: 'Fallout 4',
          publisher: 'Bethesda',
          release: '2015'
        },
        {
          name: 'Portal 2',
          publisher: 'Valve',
          release: '2011'
        },
        {
          name: 'Skyrim',
          publisher: 'Bethesda',
          release: '2011'
        },
        {
          name: 'The Witcher 3',
          publisher: 'CD Projekt RED',
          release: '2015'
        },

      ]);
    });
};
