import 'reflect-metadata';
import { Database } from '../Database';

Database.initialize()
  .then(async () => {
    console.log('📦 Connected. Running migrations...');
    await Database.runMigrations({ transaction: 'all' });
    console.log('✅ Migrations executed!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Migration run failed:', err);
    process.exit(1);
  });
