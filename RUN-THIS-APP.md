# Run the Festival app (with Camping row)

1. **Open Terminal** and go to THIS folder:
   ```bash
   cd "/Users/davide.lovison@feverup.com/Downloads/Cursor Project1/fever-festival-ticket-cards"
   ```

2. **Install and start** (if needed):
   ```bash
   npm install
   npm run dev
   ```

3. **Open the URL** the terminal shows, e.g.:
   - `http://localhost:5173`
   - or `http://localhost:5174` if 5173 is in use

4. **You should see** (in this order):
   - Navbar with "fever"
   - Hero "Rock in Rio Lisboa 2026"
   - **Burgundy banner**: "App: fever-festival-ticket-cards. Camping = green box below."
   - **Green box** with heading "Camping (3 options)" and 3 cards (Básico, Com Tenda, Premium)
   - Then "Entry ticket" with 3 cards
   - Then the ticket selector

If you do **not** see the burgundy banner, you are viewing a **different project**. Close the tab and open the URL from the terminal after running `npm run dev` in the folder above.
