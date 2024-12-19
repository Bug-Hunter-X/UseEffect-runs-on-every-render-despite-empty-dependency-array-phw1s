# React useEffect Bug: Unexpected Re-renders

This repository demonstrates a subtle bug in React's `useEffect` hook.  The `useEffect` hook is intended to perform side effects, but in this case, it unexpectedly re-renders on every state change even though an empty dependency array `[]` is specified.

The bug arises from a missing cleanup function within the `useEffect` hook.  Without a cleanup function, the effect continues to run indefinitely, leading to unexpected behavior.

## Bug Description

The provided `bug.js` demonstrates how the `useEffect` hook, despite having an empty dependency array, continues to run with every render.

## Solution

The solution in `bugSolution.js` addresses this by adding a cleanup function that is called before the effect is re-run. This ensures the effect only runs once on mount.