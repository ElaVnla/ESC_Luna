import { useFileUploader } from '@/hooks'
import { type ReactNode } from 'react'
import { Col, FormLabel, FormText } from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import { type IconBaseProps, type IconType } from 'react-icons'
import { BsUpload } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

type FileType = File & {
  preview?: string
  formattedSize?: string
}

type DropzoneFormInputProps = {
  label?: string
  labelClassName?: string
  helpText?: ReactNode | string
  showPreview?: boolean
  icon?: IconType
  iconProps?: IconBaseProps
  text?: string
  textClassName?: string
  onFileUpload?: (files: FileType[]) => void
}

const DropzoneFormInput = ({
  label,
  labelClassName,
  helpText,
  icon,
  iconProps,
  showPreview,
  text,
  textClassName,
  onFileUpload,
}: DropzoneFormInputProps) => {
  const { selectedFiles, handleAcceptedFiles, removeFile } = useFileUploader(showPreview)

  const Icon = icon ?? BsUpload
  return (
    <>
      <FormLabel className={labelClassName}>{label}</FormLabel>

      <Dropzone onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles, onFileUpload)} maxFiles={5}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone dropzone-custom">
            <div className="dz-message" {...getRootProps()}>
              <input {...getInputProps()} />
              <Icon {...iconProps} />
              <p className={textClassName}>{text}</p>
            </div>
            {showPreview && selectedFiles.length > 0 && (
              <div className="dz-preview row g-4">
                {(selectedFiles || []).map((file, idx) => (
                  <Col xl={2} md={4} sm={6} key={`file-${idx}-${file.name}`}>
                    <div className="card p-2 mb-0 shadow-none border position-relative h-100">
                      {file.preview ? (
                        <img alt={file.name} src={file.preview} className="rounded bg-light" />
                      ) : (
                        <div className="rounded bg-light text-center">{file.name.split('.')[file.name.split('.').length - 1]}</div>
                      )}
                      <div className="mt-2">
                        <p role="button" className="text-body-secondary fw-bold">
                          {file.name}
                        </p>
                        <p className="mb-0 small">{file.formattedSize}</p>
                      </div>
                      <div className="position-absolute top-0 start-100 translate-middle">
                        <button
                          className="btn btn-danger rounded-circle icon-sm p-0 d-flex align-items-center justify-content-center"
                          onClick={() => removeFile(file)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </div>
                  </Col>
                ))}
              </div>
            )}
          </div>
        )}
      </Dropzone>

      {helpText && typeof helpText === 'string' ? <FormText>{helpText}</FormText> : helpText}
    </>
  )
}

export default DropzoneFormInput
