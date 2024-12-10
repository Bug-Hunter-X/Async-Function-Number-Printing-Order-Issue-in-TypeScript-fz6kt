# TypeScript Async Function Number Printing Order Issue

This repository demonstrates a common issue encountered when working with asynchronous operations in TypeScript. The `printNumbersAsync` function aims to print numbers from 1 to n asynchronously, but due to the nature of `setTimeout`, the numbers might not be printed in the expected sequential order.

The `bug.ts` file contains the problematic code. The `bugSolution.ts` file provides a corrected version using async/await and promises to ensure the numbers are printed sequentially.

## Problem

The `setTimeout` function in JavaScript, when used within a loop, does not guarantee the order of execution of the callbacks. Each `setTimeout` call is scheduled independently, and the callback functions might execute in a different order than expected, leading to out-of-order number printing.

## Solution

The solution involves using `async/await` to make the asynchronous calls wait for each other.  This ensures sequential execution and solves the order problem. 