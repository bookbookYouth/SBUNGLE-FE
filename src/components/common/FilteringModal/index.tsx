import { Button } from '@/components/base/Button';
import { Flex } from '@/components/base/Flex';
import { MultiSelector } from '@/components/base/MultiSelector';
import { Selector } from '@/components/base/Selector';
import { Spacing } from '@/components/base/Spacing';
import { Txt } from '@/components/base/Txt';
import { Header } from '@/components/common/Header';
import type { filteringContentType } from '@/types/home';

import { sprinkles } from '@/styles/sprinkles.css';
import { paletteTheme } from '@/styles/theme.css';

interface FilteringModalProps {
  closeModal: () => void;
  handleReset: () => void;
  filteringContentList: filteringContentType[];
  isDisabled: boolean;
}

export const FilteringModal = ({ closeModal, handleReset, filteringContentList, isDisabled }: FilteringModalProps) => {
  return (
    <Flex
      direction="column"
      width="100%"
      height="100vh"
      style={{
        zIndex: 30,
        position: 'fixed',
        top: 0,
        maxWidth: '402px',
        backgroundColor: paletteTheme.palette.background,
      }}
    >
      <Header isDelete title="필터" handleClose={closeModal} />
      <Flex width="100%" style={{ flex: 1, overflowY: 'scroll' }}>
        <Flex direction="column" width="100%" gap="32px" style={{ padding: '0 20px' }}>
          {filteringContentList.map(({ label, isMulti, list, selectedItem, handleSelectedItem }) => (
            <Flex key={label} direction="column" width="100%" gap="12px">
              <Txt typo="point_lg">{label}</Txt>
              {isMulti ? (
                <MultiSelector
                  list={list}
                  selectedList={selectedItem as string[]}
                  handleSelectedList={handleSelectedItem}
                />
              ) : (
                <Selector list={list} selectedItem={selectedItem as string} handleSelectedItem={handleSelectedItem} />
              )}
            </Flex>
          ))}
          <Spacing height="12px" />
        </Flex>
      </Flex>
      <footer
        className={sprinkles({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}
        style={{
          width: '100%',
          height: '80px',
          padding: '0 16px',
          borderTop: `1px solid ${paletteTheme.palette.gray100}`,
        }}
      >
        <Button theme="clear" color="orange" width="87px" height="48px" onClick={handleReset}>
          <Txt typo="title_ml">초기화</Txt>
        </Button>
        <Button type="submit" theme="fill" color="orange" width="275px" height="48px" disabled={isDisabled}>
          <Txt typo="title_ml">결과 보기</Txt>
        </Button>
      </footer>
    </Flex>
  );
};
