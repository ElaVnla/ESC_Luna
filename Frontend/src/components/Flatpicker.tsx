import flatpickr from 'flatpickr'
import { Options } from 'flatpickr/dist/types/options'
import { useCallback, useEffect, useRef } from 'react'

type FlatpickrProps = {
  className?: string
  value?: Date | Date[]
  options?: Options
  placeholder?: string
  getValue?: (date: Date | Date[]) => void
}

const Flatpicker = ({ className, options, placeholder, value, getValue }: FlatpickrProps) => {
  const element = useRef<HTMLInputElement | null>(null)

  const handleDateChange = useCallback(
    (selectedDates: Date[]) => {
      const newDate = selectedDates.length === 1 ? selectedDates[0] : selectedDates
      getValue?.(newDate)
    },
    [getValue],
  )

  useEffect(() => {
    if (element.current) {
      const instance = flatpickr(element.current, {
        defaultDate: value,
        ...options,
        onChange: (selectedDates) => handleDateChange(selectedDates),
      })

      return () => {
        instance.destroy()
      }
    }
  }, [value, options, handleDateChange])

    return <input ref={element} className={`form-control flatpickr ${className}`} placeholder={placeholder} />
}

export default Flatpicker
