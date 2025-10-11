import type { ListType } from '@/types/onboarding';

import { Button } from '../Button';
import { Grid } from '../Grid';
import { Txt } from '../Txt';

interface MultiSelectorProps {
  list: ListType[];
  selectedList: string[];
  handleSelectedList: (key: string) => void;
}
export const MultiSelector = ({ list, selectedList, handleSelectedList }: MultiSelectorProps) => {
  return (
    <Grid colCount={2} gap="12px">
      {list.map((item) => (
        <Grid.Col key={item.key}>
          <Button
            width="100%"
            height="40px"
            color="gray"
            theme="clear"
            active={selectedList.includes(item.key)}
            onClick={() => handleSelectedList(item.key)}
          >
            <Txt typo="point_sm">{item.name}</Txt>
          </Button>
        </Grid.Col>
      ))}
    </Grid>
  );
};
