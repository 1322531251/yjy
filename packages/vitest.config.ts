import { defineConfig } from "vitest/config";
import path from "path";

const resolveFile = (file: string) => path.resolve(__dirname, file);

export default defineConfig({
test: {
  environment: 'happy-dom , jsdom', // or 'jsdom', 'node'
    // "reporters" is not supported in a project config,
    // so it will show an error
  reporters: ['json'],
  coverage: {
      provider: 'istanbul', // or 'v8'
  },
}
});

