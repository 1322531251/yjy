import { defineConfig } from "vitest/config";
import path from "path";

const resolveFile = (file: string) => path.resolve(__dirname, file);

export default defineConfig({
  test: {
    // 运行在每个测试文件前面
    setupFiles: [resolveFile("./test/setupFiles/index.ts")],
  },
});
