# TOP-knights-travails


## What I've Learned

- The equality operator doesn't work for comparing arrays. For a simple equality check, use JSON.stringify on both arrays.
- Retracing the previous steps requires setting a `previous step` attribute, and then checking if it is equal to the current step. It is important NOT to modify the previous step attribute once it has already been modified.
