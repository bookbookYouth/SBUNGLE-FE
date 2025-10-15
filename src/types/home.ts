import type { alignmentList, literatureList, nonLiteratureList } from '@/constants/home';

export type AlignmentListType = (typeof alignmentList)[number]['key'];
export type LiteratureListType = (typeof literatureList)[number]['key'];
export type NonLiteratureListType = (typeof nonLiteratureList)[number]['key'];
