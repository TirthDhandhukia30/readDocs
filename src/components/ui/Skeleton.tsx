import { cn } from '../../lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-[hsl(var(--muted))]',
        className
      )}
    />
  );
}

export function SkillCardSkeleton() {
  return (
    <div className="p-4 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
      <div className="flex items-center gap-3">
        <Skeleton className="w-8 h-8 rounded-lg" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
}

export function SkillPageSkeleton() {
  return (
    <div className="max-w-2xl mx-auto px-4 pb-32">
      <div className="pt-8 pb-12">
        <Skeleton className="h-4 w-16 mb-6" />
        <Skeleton className="h-8 w-48 mb-2" />
        <Skeleton className="h-4 w-32" />
      </div>
      
      <div className="space-y-6">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="relative pl-8">
            <Skeleton className="absolute left-0 top-0 w-6 h-6 rounded-full" />
            <div className="border border-[hsl(var(--border))] rounded-lg p-4">
              <Skeleton className="h-5 w-40 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-24 rounded-md" />
                <Skeleton className="h-8 w-28 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DomainCardSkeleton() {
  return (
    <div className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-12" />
        </div>
        <Skeleton className="h-4 w-4" />
      </div>
    </div>
  );
}
