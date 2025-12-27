import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconTextProps {
  icon?: React.ElementType;
  className?: string;
  text?: string;
}

export const IconText: React.FC<IconTextProps> = ({
  icon: Icon,
  className,
  text,
}) => {
  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      {Icon && <Icon />}
      <span className="text-2xl text-white">{text}</span>
    </div>
  );
};

export type { IconTextProps };
