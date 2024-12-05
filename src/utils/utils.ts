const getIsMobile = (): boolean => {
  const userAgent = navigator.userAgent;
  const isMobile = /mobile/i.test(userAgent);
  return isMobile;
};

export { getIsMobile };
