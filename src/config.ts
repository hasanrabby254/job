import React from 'react';

export const OFFER_URL = "https://www.af9m8trk.com/8CR11DBM/PL6125DB";

export const handleRedirect = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  window.location.href = OFFER_URL;
};
