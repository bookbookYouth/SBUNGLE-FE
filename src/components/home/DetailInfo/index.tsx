import { Flex } from '@/components/base/Flex';
import { Spacing } from '@/components/base/Spacing';
import { Table } from '@/components/base/Table';
import { Txt } from '@/components/base/Txt';
import { getGenreName } from '@/utils/home/getGenreName';

interface DetailInfoProps {
  title: string;
  genre: string;
  price: string;
  description: string;
}

export const DetailInfo = ({ title, genre, price, description }: DetailInfoProps) => {
  const cellContentList = [
    { label: '장르', content: getGenreName(genre) },
    { label: '가격', content: `${price}원` },
  ];
  return (
    <>
      <Table.Root
        head={
          <>
            <Table.HCell colSpan={2} style={{ paddingLeft: '20px' }}>
              <Txt typo="point_ml">{title}</Txt>
            </Table.HCell>
            <Table.HCell> </Table.HCell>
          </>
        }
        body={
          <>
            {cellContentList.map((item) => (
              <Table.Row>
                <Table.Cell width="35%" style={{ paddingLeft: '20px' }}>
                  <Txt typo="subTitle_bold">{item.label}</Txt>
                </Table.Cell>
                <Table.Cell style={{ paddingLeft: '12px' }}>
                  <Txt typo="content_sm">{item.content}</Txt>
                </Table.Cell>
              </Table.Row>
            ))}
          </>
        }
      />
      <Spacing height="20px" />
      <Table.Root
        head={
          <Table.HCell theme="solid" style={{ paddingLeft: '20px' }}>
            책 속의 한 문장
          </Table.HCell>
        }
        body={
          <Table.Row>
            <Table.Cell>
              <Flex style={{ padding: '16px 20px' }}>
                <Txt typo="point_sm">{description}</Txt>
              </Flex>
            </Table.Cell>
          </Table.Row>
        }
      />
    </>
  );
};
