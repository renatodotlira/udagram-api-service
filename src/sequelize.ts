import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';
import { FeedItem } from './controllers/v0/feed/models/FeedItem'


const c = config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": c.password,
  "database": c.database,
  "host":     c.host,
  "ssl": true,
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
      }
  },
  models: [FeedItem],
  dialect: 'postgres',
  storage: ':memory:',
});

