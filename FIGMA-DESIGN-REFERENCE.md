# Figma design reference – Rock in Rio 2026

Use this file for pixel-perfect implementation of the festival event page.

## Links (by viewport)

| Viewport | Figma link | Node ID |
|----------|-------------|---------|
| **Desktop** | [Rock in Rio 2026 Test – Desktop](https://www.figma.com/design/ECeLHBEGgCahWF48YnSQIp/Rock-in-Rio-2026-Test?node-id=702-5044&m=dev) | `702-5044` |
| **Mobile**  | [Rock in Rio 2026 Test – Mobile](https://www.figma.com/design/ECeLHBEGgCahWF48YnSQIp/Rock-in-Rio-2026-Test?node-id=702-4605&m=dev)  | `702-4605` |
| **Ticket selector** | [Rock in Rio 2026 Test – Selector](https://www.figma.com/design/ECeLHBEGgCahWF48YnSQIp/Rock-in-Rio-2026-Test?node-id=716-2714&m=dev) | `716-2714` |
| **Ticket card (all tickets)** | [Rock in Rio 2026 Test – Ticket card](https://www.figma.com/design/ECeLHBEGgCahWF48YnSQIp/Rock-in-Rio-2026-Test?node-id=702-5045&m=dev) | `702-5045` |

**File key (same for all):** `ECeLHBEGgCahWF48YnSQIp`

## How to use

1. **Open in Figma:** Use the link above to view the design in the browser or Figma app.
2. **Dev mode:** Append `&m=dev` (already in the URL) to see specs, or use Figma’s Inspect panel for spacing, colors, and typography.
3. **Implementation:** Match this design in `fever-festival-ticket-cards` using the same structure as `fever-fabrik-table-v2` (Navbar, Hero, Bilhetes with 2 card rows, selector, Destaques, Info, Descrição, etc.).

## Reference: Fever live page

Same product pattern (configurable ticket cards):  
https://feverup.com/m/371468?session_ids=227757762

## Notes

- Base code structure: **fever-fabrik-table-v2** (same layout, components, styling approach).
- No map: only **two rows of ticket cards** (Tipos de entrada + Alojamiento) and the ticket selector.
- Card design and page sections should follow the Figma file above for pixel-perfect match.
