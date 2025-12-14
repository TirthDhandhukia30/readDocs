import { Link, useParams } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, ChevronDown, Share2, Check, ChevronsUpDown } from 'lucide-react';
import { skillPaths, skills } from '../data/skillPaths';
import { useState, useCallback } from 'react';
import { useCollapsedSections } from '../hooks/useCollapsedSections';
import { cn } from '../lib/utils';

export function SkillPage() {
  const { skillId } = useParams({ from: '/skill/$skillId' });
  const skill = skills.find(s => s.id === skillId);
  const path = skillPaths[skillId];
  const { isCollapsed, toggle, expandAll, collapseAll, isAllExpanded } = useCollapsedSections(skillId);
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    const title = `${skill?.name} Learning Path - readDocs`;
    
    // Try native share first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // User cancelled or share failed, fall back to clipboard
      }
    }
    
    // Fall back to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [skill?.name]);

  const handleToggleAll = useCallback(() => {
    if (isAllExpanded) {
      collapseAll(path?.steps.map((_, i) => i) || []);
    } else {
      expandAll();
    }
  }, [isAllExpanded, collapseAll, expandAll, path?.steps]);

  if (!skill || !path) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-[hsl(var(--muted-foreground))]">Skill not found</p>
        <Link to="/" className="text-sm underline mt-4 inline-block">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 pb-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-8 pb-12"
      >
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Back
          </Link>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleAll}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs",
                "border border-[hsl(var(--border))]",
                "hover:bg-[hsl(var(--muted))] transition-colors"
              )}
              title={isAllExpanded ? "Collapse all" : "Expand all"}
            >
              <ChevronsUpDown className="h-3 w-3" />
              {isAllExpanded ? "Collapse" : "Expand"}
            </button>
            <button
              onClick={handleShare}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs",
                "border border-[hsl(var(--border))]",
                "hover:bg-[hsl(var(--muted))] transition-colors",
                copied && "text-green-500 border-green-500/50"
              )}
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3" />
                  Copied!
                </>
              ) : (
                <>
                  <Share2 className="h-3 w-3" />
                  Share
                </>
              )}
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-medium tracking-tight">{skill.name}</h1>
        <p className="text-[hsl(var(--muted-foreground))] text-sm mt-2">
          {path.steps.length} steps · {skill.category}
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {path.steps.map((step, index) => {
          const isExpanded = !isCollapsed(index);
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="relative pl-8 pb-8 last:pb-0"
            >
              {/* Vertical line */}
              {index < path.steps.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-px bg-[hsl(var(--border))]" />
              )}

              {/* Step number circle */}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] flex items-center justify-center">
                <span className="text-[10px] font-medium text-[hsl(var(--muted-foreground))]">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="border border-[hsl(var(--border))] rounded-lg bg-[hsl(var(--card))] overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-[hsl(var(--muted))] transition-colors text-left"
                >
                  <span className="font-medium text-sm">{step.title}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-[hsl(var(--muted-foreground))] transition-transform duration-200",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-[hsl(var(--border))] overflow-hidden"
                    >
                      <p className="px-4 py-3 text-sm text-[hsl(var(--muted-foreground))]">
                        {step.description}
                      </p>
                      
                      <div className="px-4 pb-4 flex flex-wrap gap-2">
                        {step.resources.map((resource, rIndex) => (
                          <a
                            key={rIndex}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs bg-[hsl(var(--muted))] hover:bg-[hsl(var(--foreground))]/10 transition-colors"
                          >
                            {resource.title}
                            <ExternalLink className="h-3 w-3 opacity-50" />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
