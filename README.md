# Yellow Decks

A Next.js app for building and viewing slide decks. Run it in Cursor, then use the AI to generate new decks from research and other content you supply.

## Run in Cursor (after cloning)

1. **Clone the repo** (if you haven’t already):
   ```bash
   git clone <repo-url>
   cd yellow-decks
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the dev server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser. Use the app’s routes (e.g. `/docusing`) to view decks.

### Other npm scripts

- `npm run build` — production build  
- `npm run start` — run production server (after `npm run build`)  
- `npm run lint` — run ESLint  

---

## Creating new decks from research (Public tab files)

Decks are driven by content you provide. Put your research, notes, or copy into files and reference them in Cursor so the AI can generate or extend decks.

1. **Add your research/content**  
   - Use the **Public** tab in Cursor (or add files under the project’s `public/` folder).  
   - Add plain text or markdown files with your research, bullet points, or deck copy (e.g. `public/my-research.txt` or `public/content`).

2. **Prompt Cursor to create or update a deck**  
   - Open the deck page you want to edit (e.g. `app/docusing/page.tsx`) or the right route file.  
   - In the Cursor chat, reference your research files and ask for a new deck or changes, for example:
     - *“Using the research in `public/content` and `public/automated-testing`, create a new deck (or add slides) in the docusing page that covers [topic].”*
     - *“Read `public/my-research.txt` and turn it into 5 slides in the same style as the existing docusing deck.”*

3. **Keep structure and style**  
   - The existing deck uses shared components and a consistent layout. Ask the AI to “match the existing slide structure and styling” so new slides fit the current design.

By supplying research in Public tab (or `public/`) files and pointing the AI at those files and the deck page, you can reliably generate new decks or slides from your content.
