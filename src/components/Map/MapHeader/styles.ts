import styled from 'styled-components'

export const MapHeaderWrapper = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: stretch;
  width: 100vw;
  padding-top: 1.9rem;
  padding-left: 1.2rem;
  background: none;
  z-index: 1222;

  @media screen and (min-width: 768px) {
    padding-left: 1.54rem;
  }
`

export const MapHeaderBrand = styled.img`
  height: 3rem;
  opacity: 0.9;
  transition: opacity 0.2s ease-in;

  @media screen and (min-width: 768px) {
    height: 3.6rem;
  }

  &:hover {
    opacity: 1;
  }
`

export const MapHeaderBrandWrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`
export const MapHeaderFilters = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  padding-left: 20px;
  max-width: 1200px;
  padding-bottom: 5px;

  .input-wrapper {
    flex: 1;
    margin-right: 15px;
    @media screen and (min-width: 1100px) {
      flex: 0.3;
    }

    @media screen and (min-width: 1300px) {
      flex: 0.28;
    }
  }

  .select-wrapper {
    flex: 1;

    @media screen and (min-width: 1100px) {
      flex: 0.25;
    }

    @media screen and (min-width: 1300px) {
      flex: 0.23;
      max-width: 330px;
    }
  }
`
