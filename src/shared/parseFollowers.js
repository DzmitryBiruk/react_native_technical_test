import { FOLLOWERS } from "../constants/appText";

const MEASURES = {
  MILLION: 1000000,
  TEN_THOUSAND: 10000,
};

export const parseFollowers = (followers) => {
  if (!followers) {
    return null;
  }

  if (followers > MEASURES.MILLION) {
    const rounded = (followers / MEASURES.MILLION).toFixed(1);
    return `${rounded}M ${FOLLOWERS}`;
  }

  if (followers > MEASURES.TEN_THOUSAND) {
    const rounded = (followers / MEASURES.TEN_THOUSAND).toFixed();
    return `${rounded}K ${FOLLOWERS}`;
  }

  return `${followers} ${FOLLOWERS}`;
};
