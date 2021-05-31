import { useState } from 'react'
import { StyledIcon } from 'styled-icons/types'
import Autosuggest from 'react-autosuggest'

import * as S from './styles'

type Suggestion = {
  value: string
  label: string
}

type ValueProps = {
  value?: string
  newValue?: string
}

type FormInputSearchProps = {
  options: Suggestion[]
  placeholder?: string
  style?: string
  Icon?: StyledIcon
  sendValueHandler?: () => void
}

const FormInputSearch = ({
  placeholder = undefined,
  Icon,
  options,
  sendValueHandler,
}: FormInputSearchProps) => {
  const [currentValue, setCurrentValue] = useState('')
  const [currentOptions, setCurrentOptions] = useState(options)

  const onSuggestionsFetchRequested = ({ value }: ValueProps) => {
    // @ts-ignore
    const newOptions = getSuggestions(value)
    setCurrentOptions(newOptions)
  }

  const onSuggestionsClearRequested = () => {
    setCurrentOptions([])
  }

  const onChangeHandler = (event: () => void, { newValue }: ValueProps) => {
    // @ts-ignore
    setCurrentValue(newValue)
  }

  // @ts-ignore
  const onSuggestionSelected = (event: () => void, { suggestion }) => {
    // @ts-ignore
    sendValueHandler(suggestion.value)
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value: string) => {
    const inputValue = escapeRegExp(
      value.trim().toLowerCase().replace(/\s/g, '')
    )
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : options.filter((opt) => {
          const optValue = escapeRegExp(
            opt.label.toLowerCase().replace(/\s/g, '')
          )
          return optValue.search(inputValue) !== -1
        })
  }

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionLabel = (suggestion: Suggestion) => suggestion.label

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion: Suggestion) => (
    <div>{suggestion.label}</div>
  )

  const escapeRegExp = (str: string) => {
    if (typeof str !== 'string') {
      return ''
    }
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
  }

  // Properties of input element
  const inputProps = {
    placeholder,
    value: currentValue,
    onChange: onChangeHandler,
  }

  return (
    <S.FormInputSearchWrapper className="input-wrapper">
      {/* @ts-ignore */}
      <Autosuggest
        suggestions={currentOptions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionLabel}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionSelected}
        /* @ts-ignore */
        inputProps={inputProps}
      />
      {/* @ts-ignore */}
      {Icon ? <Icon className="icon" /> : null}
    </S.FormInputSearchWrapper>
  )
}

export default FormInputSearch
