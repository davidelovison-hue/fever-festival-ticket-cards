# Setup check – run these in your terminal

Run each command **in order** in **Terminal.app** or Cursor’s terminal.  
If something fails, fix it before going to the next step.

---

## 1. Check Node.js

```bash
node -v
```

- **If you see a version** (e.g. `v20.10.0`) → Node is installed. Continue to step 2.
- **If you see `command not found`** → Install Node.js:
  - Go to https://nodejs.org
  - Download and install the **LTS** version
  - **Quit and reopen Terminal** (or Cursor), then run `node -v` again

---

## 2. Check npm

```bash
npm -v
```

- **If you see a number** (e.g. `10.2.0`) → npm is installed. Continue to step 3.
- **If you see `command not found`** → Node was not installed correctly; reinstall Node (step 1) and reopen the terminal.

---

## 3. Go to the project folder

```bash
cd "/Users/davide.lovison@feverup.com/Downloads/Cursor Project1/fever-festival-ticket-cards"
```

---

## 4. Install project packages

```bash
npm install
```

- **If it succeeds** → You should see a `node_modules` folder and a `package-lock.json` file. Continue to step 5.
- **If you see errors** (e.g. network, permissions):
  - Try again: `npm install`
  - If you use a VPN/proxy, try turning it off
  - On corporate networks, you may need to set `npm config set proxy ...` (ask IT)

---

## 5. Check that packages are there

```bash
ls node_modules/vite
ls node_modules/react
```

- **If both folders exist** → Dependencies are installed. Continue to step 6.
- **If `No such file or directory`** → Run `npm install` again (step 4).

---

## 6. Start the dev server

```bash
npm run dev
```

- **If it works** → You’ll see something like:
  ```
  ➜  Local:   http://localhost:5173/
  ```
  Open that URL in your browser (e.g. **http://localhost:5173/**).

- **If you see `command not found: vite`** → Run `npm install` again.
- **If you see `Port 5173 is in use`** → Another app is using that port. Use the other URL Vite prints (e.g. port 5174) or close the other app.

---

## 7. (Optional) Test the build

Stop the dev server (Ctrl+C), then:

```bash
npm run build
```

- **If it succeeds** → You’ll see a `dist` folder. Your setup is correct.
- **If you see TypeScript or build errors** → Share the error message to fix the code.

---

## Summary

| Check              | Command        | Expected result        |
|--------------------|----------------|------------------------|
| Node installed     | `node -v`      | e.g. v20.x.x           |
| npm installed      | `npm -v`       | e.g. 10.x.x            |
| In project folder  | `pwd`          | path ending in `fever-festival-ticket-cards` |
| Packages installed | `npm install`  | No errors, `node_modules` exists |
| Dev server         | `npm run dev`  | Local: http://localhost:5173/     |

If **localhost still doesn’t open** after step 6:

- Use the **exact** URL from the terminal (including port).
- Try another browser or a private/incognito window.
- Temporarily disable VPN or “block trackers” extensions.
