# Design notes

The visual system is intentionally restrained and professional.

- Dark charcoal rather than pure black.
- Muted teal as the primary accent; warm brown only for small "next chapter" details.
- No framework CSS dependency required.
- System fonts only: fast, portable, and no external font licensing/dependency.
- Cards are used sparingly; most hierarchy comes from spacing, rules, typography, and alignment.
- Project cards behave like catalog entries, which quietly carries forward the WhatABook concept.
- Animation is minimal and disabled under `prefers-reduced-motion`.

If WEB425 requires the supplied `w4.css`, preserve this stylesheet as a design reference and translate the custom classes to the course utilities rather than fighting the grading contract.
