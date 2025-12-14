import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '../../lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const wordArray = words.split(' ');

  return (
    <motion.div ref={ref} className={cn('font-medium', className)}>
      {wordArray.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              filter: 'blur(0px)',
            },
          }}
          transition={{
            duration: 0.4,
            delay: idx * 0.08,
            ease: 'easeOut',
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
