import { Button } from '@/components/base/Button';
import { Grid } from '@/components/base/Grid';
import { Txt } from '@/components/base/Txt';
import type { ListType } from '@/types/onboarding';

interface MultiSelectorProps {
  list: ListType[];
  selectedList: string[];
  handleSelectedList: (key: string) => void;
}
export const MultiSelector = ({ list, selectedList, handleSelectedList }: MultiSelectorProps) => {
  return (
    <Grid>
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
            <Txt typo="point_ml">{item.name}</Txt>
          </Button>
        </Grid.Col>
      ))}
    </Grid>
  );
};
