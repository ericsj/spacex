import styled from 'styled-components'

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 900px;
  justify-content: center;
  align-items: flex-end;
  margin: 40px auto 40px auto;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: 820px) {
  justify-content: space-between;
  }
`