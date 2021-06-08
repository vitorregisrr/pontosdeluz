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
  height: 3.1rem;
  opacity: 0.9;
  margin-top: 0.3rem;
  transition: opacity 0.2s ease-in;

  @media screen and (min-width: 768px) {
    height: 3.6rem;
    margin-top: 0;
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

type MapHeaderFiltersProps = {
  isActive: boolean
}

export const MapHeaderFilters = styled.form`
  /* Mobile version */
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 136px;
    left: 0;
    border-radius: 0 20px 20px 0;
    width: 90vw;
    padding: 30px 40px 30px 30px;
    padding-left: 30px;
    padding-right: 40px;
    background-color: rgba(250, 250, 250, 0.9);
    z-index: 2000;
    transform: translateX(-100%);
    transition: all 0.4s ease-in-out;

    ${(props: MapHeaderFiltersProps) =>
      props.isActive ? `transform: translateX(0)` : ''};
  }

  /* Desktop version */
  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    padding-left: 20px;
    max-width: 600px;
    padding-bottom: 5px;
    background-color: none;
    z-index: 1000;
  }

  @media screen and (min-width: 1200px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1300px) {
    max-width: 1200px;
  }

  .input-wrapper {
    flex: 1;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
      margin-right: 15px;
      margin-bottom: 0;
    }

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

  .input-wrapper {
    &:nth-child(1) {
      z-index: 4;
    }

    &:nth-child(2) {
      z-index: 3;
    }
  }

  .select-wrapper {
    &:nth-child(1) {
      z-index: 2;
    }
  }
`
type MapHeaderFilterTogglerProps = {
  isActive: boolean
}

export const MapHeaderFilterToggler = styled.button`
  position: absolute;
  top: 28%;
  right: -34px;
  width: 34px;
  padding: 4px;
  padding-left: 2px;
  background-color: rgba(250, 250, 250, 0.9);
  border-radius: 0 15px 15px 0;
  border: none;
  box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.2);
  transform: translateY(-50%);

  @media screen and (min-width: 768px) {
    display: none;
  }

  .times-icon {
    width: 16px;
  }

  ${(props: MapHeaderFilterTogglerProps) => ``}
`
