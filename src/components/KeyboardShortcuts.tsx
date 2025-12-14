import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';

interface KeyboardShortcutsProps {
  isOpen: boolean;
  onClose: () => void;
}

const shortcuts = [
  { keys: ['⌘', 'K'], description: 'Open search' },
  { keys: ['Esc'], description: 'Close modal / Go back' },
  { keys: ['H'], description: 'Go to home page' },
  { keys: ['?'], description: 'Open keyboard shortcuts' },
  { keys: ['↑', '↓'], description: 'Navigate search results' },
  { keys: ['Enter'], description: 'Open selected result' },
  { keys: ['⌘', 'Click'], description: 'Copy link to clipboard' },
];

export function KeyboardShortcuts({ isOpen, onClose }: KeyboardShortcutsProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "fixed left-1/2 top-[20%] -translate-x-1/2 z-50",
              "w-full max-w-md mx-4",
              "bg-[hsl(var(--background))]",
              "border border-[hsl(var(--border))]",
              "rounded-2xl shadow-2xl",
              "overflow-hidden"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--border))]">
              <h2 className="font-semibold">Keyboard Shortcuts</h2>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md hover:bg-[hsl(var(--muted))] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Shortcuts list */}
            <div className="p-4 space-y-3">
              {shortcuts.map((shortcut, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  <span className="text-sm text-[hsl(var(--muted-foreground))]">
                    {shortcut.description}
                  </span>
                  <div className="flex items-center gap-1">
                    {shortcut.keys.map((key, keyIndex) => (
                      <kbd
                        key={keyIndex}
                        className={cn(
                          "px-2 py-1 rounded text-xs font-medium",
                          "bg-[hsl(var(--muted))]",
                          "border border-[hsl(var(--border))]",
                          "text-[hsl(var(--foreground))]"
                        )}
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-[hsl(var(--border))] bg-[hsl(var(--muted))]/30">
              <p className="text-xs text-[hsl(var(--muted-foreground))] text-center">
                Press <kbd className="px-1.5 py-0.5 rounded bg-[hsl(var(--muted))] text-xs">Esc</kbd> to close
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
