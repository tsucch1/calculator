type: 'sqlite',
  {
    username: 'sqlite',
    password: 'sqlite',
    entities: ['dist/entities/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
      entitiesDir: 'src/entities',
      migrationsDir: 'src/migrations',
    },
  };
