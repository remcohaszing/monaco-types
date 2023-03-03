import * as monaco from 'monaco-editor'
import { MarkerSeverity, MonacoEditor, IDisposable, editor } from 'monaco-types'

// Ensure the MonacoEditor type works
declare function useMonaco(monaco: MonacoEditor): void
useMonaco(monaco)

// Ensure type imports work
export const disposable: IDisposable = {
  dispose() {}
}

// Ensure enums work for type annotations
let severity: MarkerSeverity

// @ts-expect-error ensure enums can’t be used as values.
severity = MarkerSeverity.Error

/// @ts-expect-error ensure namespaces can’t be used as values.
editor.createModel('')
