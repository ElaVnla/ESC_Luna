// src/scripts/seedDestinations.ts
import 'reflect-metadata';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { Database } from '../Database';
import { Destination } from '../entities/Destination';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

const opt = (v?: string) => (v && v.trim() !== '' ? v.trim() : undefined);
const optOrNull = (v?: string) => (v && v.trim() !== '' ? v.trim() : null);
const toNum = (v?: string) => (v && v.trim() !== '' ? Number(v) : undefined); // <-- number | undefined

async function main() {
  console.log('Seeding destinations…');
  if (!Database.isInitialized) await Database.initialize();
  const repo = Database.getRepository(Destination);

  const existing = await repo.count();
  if (existing > 0) {
    console.log('Destinations already exist. Skipping seed.');
    return;
  }

  const csvPath = path.join(process.cwd(), 'destinations.csv');
  if (!fs.existsSync(csvPath)) throw new Error(`destinations.csv not found at: ${csvPath}`);
  const csvText = fs.readFileSync(csvPath, 'utf8');

  const records = parse(csvText, {
    columns: true,
    bom: true,
    skip_empty_lines: true,
    trim: true,
  }) as Array<Record<string, string>>;

  if (!records.length) {
    console.log('No rows found. Nothing to seed.');
    return;
  }

  const rows = records
    .map((r) => ({
      uid: opt(r.uid),                  // required to insert; skip if missing
      term: optOrNull(r.term),          // allow null
      lat: toNum(r.lat),                // <-- number | undefined (matches entity decimal-as-number)
      lng: toNum(r.lng),                // <-- number | undefined
      type: opt(r.type) || 'city',
      state: optOrNull(r.state),
    }))
    .filter((r) => !!r.uid);            // skip rows with no uid

  const skipped = records.length - rows.length;
  if (skipped > 0) console.log(`Skipped ${skipped} rows with empty uid.`);
  if (rows.length === 0) {
    console.log('No valid rows to insert after filtering. Done.');
    return;
  }

  await repo
    .createQueryBuilder()
    .insert()
    .values(rows as unknown as QueryDeepPartialEntity<Destination>[]) // satisfy DeepPartial
    .orIgnore()
    .execute();

  console.log(`✅ Seeded ${rows.length} destinations.`);
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exitCode = 1;
  })
  .finally(async () => {
    try { if (Database.isInitialized) await Database.destroy(); } catch {}
  });
