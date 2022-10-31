import styled from '@emotion/styled';

export const List = styled.ul`
  box-sizing: border-box;
  width: 100%;
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const WrapList = styled.div`
  box-sizing: border-box;
  width: 500px;
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${p => p.theme.shadows.large};
  border-radius: ${p => p.theme.radii.large};
  background-color: ${p => p.theme.colors.lightBlue};
`;
export const ListTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: ${p => p.theme.letterSpacings.wide};
  color: ${p => p.theme.colors.deepBlue};
`;
