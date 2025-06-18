import { FormControl, FormGroup, FormLabel, FormText, type FormControlProps } from 'react-bootstrap'
import Feedback from 'react-bootstrap/esm/Feedback'
import { Controller, type FieldPath, type FieldValues, type PathValue } from 'react-hook-form'
import { type TextInputProps } from './TextFormInput'
import { type ReactNode } from 'react'

type FileFormInputProps = {
  helpText?: ReactNode | string
}

const FileFormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  name,
  containerClass,
  control,
  helpText,
  id,
  label,
  noValidate,
  ...other
}: Omit<TextInputProps<TFieldValues>, 'helpText'> & FormControlProps & FileFormInputProps) => {
  return (
    <Controller<TFieldValues, TName>
      name={name as TName}
      defaultValue={'' as PathValue<TFieldValues, TName>}
      control={control}
      render={({ field, fieldState }) => (
        <FormGroup className={containerClass ?? ''}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl type="file" id={id} {...other} {...field} isInvalid={Boolean(fieldState.error?.message)} />
          {helpText && typeof helpText === 'string' ? <FormText id={`${id}-help`}>{helpText}</FormText> : helpText}

          {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
        </FormGroup>
      )}
    />
  )
}

export default FileFormInput
