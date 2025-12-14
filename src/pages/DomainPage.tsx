import { useParams, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { learningPaths, domains } from '../data/learningPaths';

export function DomainPage() {
  const { domainId } = useParams({ from: '/domain/$domainId' });
  const path = learningPaths[domainId];
  const domain = domains.find((d) => d.id === domainId);

  if (!path || !domain) {
    return (
      <div className="text-center py-16">
        <h1 className="text-xl font-medium mb-4">Domain not found</h1>
        <Link to="/" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] underline-offset-4 hover:underline transition-colors">
          ← Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="pt-8 pb-16"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors text-xs mb-8 group"
        >
          <ArrowLeft className="h-3 w-3 group-hover:-translate-x-0.5 transition-transform" />
          Back
        </Link>

        <h1 className="text-2xl md:text-3xl font-medium">{path.name}</h1>
        <p className="text-[hsl(var(--muted-foreground))] text-sm mt-2">{path.description}</p>
      </motion.div>

      {/* Flow */}
      <div className="relative pb-16">
        {path.steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative"
          >
            {/* Step */}
            <div className="flex gap-6 pb-10">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] flex items-center justify-center text-xs font-medium shrink-0">
                  {index + 1}
                </div>
                {index < path.steps.length - 1 && (
                  <div className="w-px flex-1 bg-[hsl(var(--border))] mt-3" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-medium text-sm">{step.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))] text-xs mt-1 leading-relaxed">
                  {step.description}
                </p>

                {/* Resources */}
                <div className="mt-4 space-y-1">
                  {step.resources.map((resource, idx) => (
                    <motion.a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 py-2 text-sm hover:text-[hsl(var(--foreground))] text-[hsl(var(--muted-foreground))] transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-current opacity-40" />
                      <span className="flex-1">{resource.title}</span>
                      <span className="text-[10px] opacity-0 group-hover:opacity-60 transition-opacity">
                        {resource.source}
                      </span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
