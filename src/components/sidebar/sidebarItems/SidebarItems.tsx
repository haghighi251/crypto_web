import { SidebarItems as FlowbiteSidebarItems } from 'flowbite-react';
import { forwardRef } from 'react';

import { iSidebarItemsProps } from '@/types/types/components/sidebar';

const SidebarItems = forwardRef<any, iSidebarItemsProps>(
  (
    {
      id,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iSidebarItemsProps,
    ref: React.Ref<any> | null,
  ) => {
    return (
      <FlowbiteSidebarItems
        id={id}
        className={className}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteSidebarItems>
    );
  },
);

export default SidebarItems;
