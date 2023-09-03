# TOP-knights-travails


## What I've Learned

- The equality operator doesn't work for comparing arrays. For a simple equality check, use JSON.stringify on both arrays.
- Retracing the previous steps requires setting a `previous step` attribute to each object, then assigning that to a variable, and then eventually checking if the current step is equal to this variable. Then the variable needs to be reassigned another `previous step` object attribute. It is important NOT to modify the `previous step` attribute once it has already been modified.
