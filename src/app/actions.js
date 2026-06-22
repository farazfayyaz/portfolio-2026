'use server';

import { sql } from '@vercel/postgres';

export async function getGuestbookEntries() {
  try {
    const { rows } = await sql`
      SELECT id, message, author, color, rotation
      FROM guestbook
      ORDER BY id DESC
      LIMIT 100
    `;
    return rows;
  } catch (error) {
    console.error('Failed to fetch guestbook entries:', error);
    return [];
  }
}

export async function addGuestbookEntry(formData) {
  const author = formData.get('author');
  const message = formData.get('message');
  const color = formData.get('color');
  const rotation = formData.get('rotation');

  if (!author || !message) {
    return { success: false };
  }

  try {
    await sql`
      INSERT INTO guestbook (author, message, color, rotation)
      VALUES (${author}, ${message}, ${color}, ${rotation})
    `;
    return { success: true };
  } catch (error) {
    console.error('Failed to add guestbook entry:', error);
    return { success: false };
  }
}
