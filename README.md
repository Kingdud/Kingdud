Clicker Heroes Gilding Calculator

I cloned this from riebel's repo and 'fixed' a few things:

1. Added Chiron -> Wepa for regilding
2. Removed the chart (it was a performance hog)
3. Removed the degilded hero list (performance hog)
4. Reduced the 'upcoming degilds' list to 1 from 100 (he wasn't using it for smart gild moving anyway, minor perf gain)
5. Fixed a bug where it was using your total gold stat instead of highest gold stat; this fixes issues with fresh transcendences having gilds moved onto late-stage rangers like Terra or Phthalo
7. Removed the default slider positions. They will now default to 0, always.
8. Changed default gilding speed to 1000 per second (hardware limited, basically) from 1 per second.
