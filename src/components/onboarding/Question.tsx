import { Txt } from '../base/Txt';

interface QuestionProps {
  pointTxt: string;
  restTxt: string;
}

export const Question = ({ pointTxt, restTxt }: QuestionProps) => {
  return (
    <Txt typo="point_lg">
      <Txt color="primary" typo="point_lg">
        {pointTxt}
      </Txt>
      {restTxt}
    </Txt>
  );
};
