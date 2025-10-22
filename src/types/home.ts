import type { alignmentList, literatureList, nonLiteratureList } from '@/constants/home';
import type { ListType, PreferenceListType } from '@/types/onboarding';

export type AlignmentListType = (typeof alignmentList)[number]['key'];
export type LiteratureListType = (typeof literatureList)[number]['key'];
export type NonLiteratureListType = (typeof nonLiteratureList)[number]['key'];

export type ChipContentType = {
  label: React.ReactNode;
  isValue: boolean;
};

export type filteringContentType = {
  label: string;
  isMulti: boolean;
  list: ListType[];
  selectedItem: AlignmentListType | LiteratureListType[] | NonLiteratureListType[] | PreferenceListType[];
  handleSelectedItem: (
    key: AlignmentListType | LiteratureListType | NonLiteratureListType | PreferenceListType,
  ) => void;
};
