# Room Prompt Library

Every generated prompt = `STYLE_PREAMBLE + camera move line`. The preamble is
identical across all scenes of one tour — that's what makes the film feel like
one continuous shoot (locked world grammar). Camera + light ONLY; never
describe furniture, colors, or contents — the photo already carries them.

## Style preamble (default, edit per listing brand)

```
Cinematic real estate videography, natural daylight, soft shadows,
warm neutral grade, shallow depth of field, gimbal-smooth motion,
architectural lines kept perfectly straight, photorealistic.
```

## Camera moves (prompt_key → motion line)

| prompt_key | motion line | best for |
|---|---|---|
| `drone_approach` | Slow aerial drone approach toward the facade, gently descending to eye level, sun glinting off windows. | exterior |
| `threshold_reveal` | Camera glides forward through the doorway, revealing the space beyond as light opens up. | entry, foyer |
| `slow_orbit` | Slow 30-degree orbital move around the center of the room, parallax on foreground edges. | living, master bedroom |
| `lateral_glide` | Smooth lateral dolly glide from left to right, keeping verticals straight. | dining, hallway |
| `push_in` | Slow steady push-in toward the focal point of the room, depth compressing gently. | kitchen, bathroom, office |
| `pull_back_reveal` | Camera pulls back slowly, widening to reveal the full space and the view beyond. | terrace, balcony, garden |
| `rise_tilt` | Camera rises slowly while tilting down slightly, revealing layout from above eye level. | open-plan, staircase |
| `window_drift` | Slow drift toward the window, exterior view coming into focus, curtains catching light. | any room with a view |

## Duration guide

- 10 s: exterior, living, kitchen, terrace (hero scenes)
- 8–9 s: entry, dining, bedrooms, bathrooms (connective scenes)

## Anti-patterns (rejects)

- People, pets, or moving objects appearing → regenerate
- Warped door frames / bending counters → shorten duration or switch to `lateral_glide`
- Light direction flipping vs other scenes → re-check preamble was included
