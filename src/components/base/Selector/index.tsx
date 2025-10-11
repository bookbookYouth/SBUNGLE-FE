import type { ListType } from '@/types/onboarding';

import { Button } from '../Button';
import { Grid } from '../Grid';
import { Txt } from '../Txt';

interface SelectorProps {
  list: ListType[];
  selectedItem: string;
  handleSelectedItem: (key: string) => void;
}
export const Selector = ({ list, selectedItem, handleSelectedItem }: SelectorProps) => {
  return (
    <Grid colCount={2} gap="12px">
      {list.map((item) => (
        <Grid.Col key={item.key}>
          <Button
            width="100%"
            height="40px"
            color="gray"
            theme="clear"
            active={selectedItem === item.key}
            onClick={() => handleSelectedItem(item.key)}
          >
            <Txt typo="point_sm">{item.name}</Txt>
          </Button>
        </Grid.Col>
      ))}
    </Grid>
  );
};
