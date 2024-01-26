import * as monaco from "monaco-editor";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

self.MonacoEnvironment = {
  getWorker() {
    return new tsWorker();
  },
};

monaco.languages.typescript.typescriptDefaults.setCompilerOptions({});

monaco.editor.create(document.getElementById("a")!, {
  language: "typescript",
  value: "const a=3;\na=4;",
});
