export interface TopTierResponse {
  code: number;
  status: string;
  data: {
    feature: TopFeature[];
    newNoteworthy: TopFeature[];
    trending: TopFeature[];
  };
}

export interface TopFeature {
  createdAt: string;
  creatorName: string;
  currency: string;
  id: string;
  image: string;
  isAdminVoted: string;
  price: string;
  shareUrl: string;
  tierGroup: string;
  tierId: string;
  title: string;
  topNumber: string;
  updatedAt: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: any;
  weekNumber: string;
}
