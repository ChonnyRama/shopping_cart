import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

console.log("running setup...")
expect.extend(matchers);

afterEach(() => {
  cleanup();
});