import { EMAIL_REGEX } from '@/regex/regex'

export const validateForm = (
  values: Record<string, string>,
  type: 'signup' | 'login',
) => {
  const errors: Record<string, string> = {}

  if (!values.email || values.email.length === 0) {
    errors.email = '이메일을 입력해주세요!'
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = '유효하지 않은 이메일 형식입니다.'
  } else {
    delete errors.email
  }

  if (!values.password || values.password.length === 0) {
    errors.password = '비밀번호를 입력해주세요!'
  } else if (values.password.length < 8) {
    errors.password = '비밀번호는 8자 이상이어야 합니다.'
  } else {
    delete errors.password
  }

  if (type === 'signup')
    if (!values.passwordConfirm || values.passwordConfirm.length === 0) {
      errors.passwordConfirm = '비밀번호 확인을 입력해주세요!'
    } else if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = '비밀번호가 일치하지 않습니다.'
    } else {
      delete errors.passwordConfirm
    }

  console.log(errors)

  return errors
}
