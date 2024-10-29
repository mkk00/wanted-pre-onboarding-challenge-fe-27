import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierConfig from 'eslint-config-prettier'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default {
  ignores: ['dist'], // ESLint가 무시할 파일 또는 폴더
  extends: [
    // 여러 규칙을 한 번에 가져와 적용
    'eslint:recommended', // 기본 JavaScript 규칙을 포함한 ESLint의 권장 설정
    'plugin:@typescript-eslint/recommended', // TypeScript 코드에 대한 권장 규칙
    'plugin:react-hooks/recommended', // React Hooks 관련 규칙
    'plugin:prettier/recommended', // Prettier와 ESLint의 충돌 방지
    prettierConfig, // 별도로 작성한 prettierConfig 설정을 가져와 추가
  ],
  parser: tsparser, // ESLint가 코드 해석 시 사용할 파서 지정
  files: ['**/*.{ts,tsx}'], // ESLint가 검사할 파일 확장자
  languageOptions: {
    ecmaVersion: 2024,
    globals: globals.browser, // 브라우저 환경의 전역 변수를 포함해 브라우저 환경에서의 전역 변수를 인식하도록 설정
  },
  plugins: {
    // 새로운 규칙이나 기능을 추가
    '@typescript-eslint': tseslint,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    prettier: prettierConfig,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error', // Prettier 규칙을 따르도록 설정
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 미사용 변수에 대한 경고를 띄우고, _로 시작하는 변수는 무시
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 함수나 모듈의 반환 타입을 명시하지 않아도 경고를 표시하지 않도록 설정
  },
}
