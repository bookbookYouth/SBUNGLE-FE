import { Button } from '@/components/base/Button';
import { Grid } from '@/components/base/Grid';
import { Txt } from '@/components/base/Txt';
import type { ListType } from '@/types/onboarding';

interface SelectorProps {
  list: ListType[];
  selectedItem: string;
  handleSelectedItem: (key: string) => void;
}
export const Selector = ({ list, selectedItem, handleSelectedItem }: SelectorProps) => {
  return (
    <Grid>
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
            <Txt typo="point_ml">{item.name}</Txt>
          </Button>
        </Grid.Col>
      ))}
    </Grid>
  );
};
