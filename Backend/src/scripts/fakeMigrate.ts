import 'reflect-metadata';
import { Database } from '../Database'; // ✅ use correct named export

Database
  .initialize()
  .then(async () => {
    console.log('📦 Connected. Faking all pending migrations...');
    await Database.runMigrations({ transaction: 'all', fake: true });
    console.log('✅ Migrations faked.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Migration fake failed:', err);
    process.exit(1);
  });
