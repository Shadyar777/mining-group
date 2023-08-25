import { FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import { ResourceItem } from './ResourceItem.tsx';

export interface Resource {
  id: number;
  icon: ReactElement;
  name: string;
  isChecked: boolean;
}

interface ResourceListProps {
  resources: Resource[];
  onResourceChange: (updatedResources: Resource[]) => void;
}

export const ResourceList: FC<ResourceListProps> = ({
  resources,
  onResourceChange,
}) => {
  const handleCheckboxChange = (id: number, checked: boolean) => {
    const updatedResources = resources.map((resource) =>
      resource.id === id ? { ...resource, isChecked: checked } : resource,
    );
    onResourceChange(updatedResources);
  };

  return (
    <Box>
      {resources.map((resource) => (
        <ResourceItem
          key={resource.id}
          icon={resource.icon}
          text={resource.name}
          isChecked={resource.isChecked}
          onCheckedChange={(checked) =>
            handleCheckboxChange(resource.id, checked)
          }
        />
      ))}
    </Box>
  );
};
