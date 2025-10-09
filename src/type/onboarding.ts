import type { ageList, genderList, genreList, preferenceList } from '@/constants/onboarding';

export type ListType = { name: string; key: string };

export type GenderListType = (typeof genderList)[number]['key'];
export type AgeListType = (typeof ageList)[number]['key'];
export type GenreListType = (typeof genreList)[number]['key'];
export type PreferenceListType = (typeof preferenceList)[number]['key'];
