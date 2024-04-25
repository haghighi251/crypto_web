import { Tabs as FlowbiteTabs } from 'flowbite-react';
import { forwardRef } from 'react';

import { iTabsProps } from '@/types/types/components/tabs';

const Tabs = forwardRef<any, iTabsProps>(
  (
    {
      id,
      ariaLabel,
      onActiveTabChange,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iTabsProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteTabs
        id={id}
        aria-label={ariaLabel}
        onActiveTabChange={onActiveTabChange}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteTabs>
    );
  },
);

export default Tabs;
