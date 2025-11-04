import InstagramIcon from '@/assets/instagram.svg?react';
import { Flex } from '@/components/base/Flex';
import { Link } from '@/components/base/Link';
import { Spacing } from '@/components/base/Spacing';
import { Table } from '@/components/base/Table';
import { Txt } from '@/components/base/Txt';
import { getKoreanDay } from '@/utils/bookstore/getKoreanDay';

interface DetailInfoProps {
  address: string;
  direction: string;
  hours: {
    [key: string]: string;
  };
  sns: string;
}

export const DetailInfo = ({ address, direction, hours, sns }: DetailInfoProps) => {
  return (
    <>
      <Table.Root
        head={
          <>
            <Table.HCell style={{ paddingLeft: '20px' }}>
              <Txt typo="subTitle_bold">위치</Txt>
            </Table.HCell>
          </>
        }
        body={
          <>
            <Table.Row key={address}>
              <Table.Cell style={{ paddingLeft: '20px' }}>
                <Txt typo="subTitle_bold">{address}</Txt>
              </Table.Cell>
            </Table.Row>
            <Table.Row key={direction}>
              <Table.Cell style={{ paddingLeft: '20px' }}>
                <Txt typo="content_sm">{direction}</Txt>
              </Table.Cell>
            </Table.Row>
          </>
        }
      />
      <Spacing height="20px" />
      <Table.Root
        head={
          <>
            <Table.HCell style={{ paddingLeft: '20px' }}>
              <Txt typo="subTitle_bold">영업일자</Txt>
            </Table.HCell>
            <Table.HCell> </Table.HCell>
          </>
        }
        body={Object.entries(hours).map(([key, value]) => (
          <Table.Row key={key}>
            <Table.Cell style={{ paddingLeft: '20px' }}>
              <Txt typo="subTitle_bold">{getKoreanDay(key)}</Txt>
            </Table.Cell>
            <Table.Cell style={{ paddingLeft: '12px' }}>
              <Txt typo="content_sm">{value}</Txt>
            </Table.Cell>
          </Table.Row>
        ))}
      />
      <Spacing height="20px" />
      <Table.Root
        head={
          <Table.HCell style={{ paddingLeft: '20px' }}>
            <Txt typo="subTitle_bold">SNS</Txt>
          </Table.HCell>
        }
        body={
          <Table.Row>
            <Table.Cell>
              <Flex style={{ padding: '0 20px' }}>
                <Link url={sns} isExternal={true} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <InstagramIcon />
                  <Txt typo="content_sm" color="green">
                    {sns}
                  </Txt>
                </Link>
              </Flex>
            </Table.Cell>
          </Table.Row>
        }
      />
    </>
  );
};
