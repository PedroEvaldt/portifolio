import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";

vi.stubGlobal(
  "IntersectionObserver",
  vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
    takeRecords: vi.fn(() => []),
  }))
);
