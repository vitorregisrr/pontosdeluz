import styled from 'styled-components'

export const FormInputSearchWrapper = styled.div`
  position: relative;
  width: 100%;
  transition: all 0.4s;

  .icon {
    position: absolute;
    top: 11px;
    width: 14px;
    right: 12px;
    color: rgba(6, 2, 43, 0.5);
  }

  &:hover {
    transform: scale(1.05);
  }

  .react-autosuggest__input {
    font-size: 13px;
    width: 100%;
    height: 35px;
    padding-left: 20px;
    border: none;
    border-radius: 16px;
    color: rgba(0, 0, 0, 0.5);
    box-shadow: 3px 4px 15px rgba(0, 0, 0, 0.15);
    opacity: 0.84;
    transition: all 0.4s;

    &:focus,
    &:active {
      outline: none;
    }
  }

  .react-autosuggest__suggestions-container {
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translate(-50%, 100%);
    opacity: 0.94;
    padding: 3px 0;
    border-radius: 16px;
    background-color: rgba(250, 250, 250, 0.95);
    overflow: hidden;
    width: 100%;
    transition: all 0.3s;

    &:not(.react-autosuggest__suggestions-container--open) {
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, 108%);
    }
  }

  .react-autosuggest__suggestions-list {
    display: flex;
    margin: 0;
    flex-direction: column;
  }

  .react-autosuggest__suggestion {
    font-size: 1.1rem;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    padding: 8px 10px 7px 10px;
    border-radius: 15px;
    transition: all 0.3s;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:hover {
      background-color: #815dd6;
      color: #fff;
    }
  }
`
