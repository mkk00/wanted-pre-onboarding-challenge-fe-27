# 원티드 프리온보딩 11월 사전과제

<img src="https://github.com/user-attachments/assets/4136c190-7ec5-4523-a34f-00d55597805f" />


## install & start

- 개발 서버

```bash
npm install
npm run dev
```

- DB 서버 [🔗](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)

```bash
cd db-server
yarn start # localhost:8080
```

<br/>

## test 계정
- id : `test@test.com`
- pw : `testtest`

<br/>

## skill

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![zustand](https://img.shields.io/badge/zustand-f7a904?style=for-the-badge&logo=zustand&logoColor=white) ![styled--components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

![vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![react-router](https://img.shields.io/badge/react--router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

<br/>

## 디렉토리 구조

```bash
📂 my-todo
├─ 📂 src
│  ├─ 📂 api
│  ├─ 📂 components
│  │  ├─ 📂 auth
│  │  ├─ 📂 common
│  │  │   └─ 📄 Header.tsx
│  │  ├─ 📂 layout
│  │  └─ 📂 todo
│  │  │   └─ 📄 TodoDetail.tsx
│  ├─ 📂 hooks   # 커스텀 훅
│  ├─ 📂 interfaces   # 타입
│  ├─ 📂 pages   # 페이지 컴포넌트
│  │  ├─ 📂 auth
│  │  │   ├─ 📄 Login.tsx
│  │  │   └─ 📄 Signup.tsx
│  │  └─ 📂 todo
│  │  │   └─ 📄 TodoList.tsx
│  ├─ 📂 regex   # 유효성 검사
│  ├─ 📂 router
│  ├─ 📂 store   # zustand store
│  ├─ 📂 styles   # 전역 스타일
│  ├─ 📂 utils   # 유틸 함수
│  └─ 📄 main.tsx   # entry
```

<br/>

## 레이아웃

- 로그인 & 회원가입(/auth/login, /auth/signup)

<img src="https://github.com/user-attachments/assets/1dd74d4e-a63a-40d0-a0f2-a649d65a9d32" style="width: 450px;" />
<img src="https://github.com/user-attachments/assets/46469d81-5279-4b0e-8b18-5ff906fd5c3a" style="width: 450px;" />

<br/><br/>

- Todo List & Detail(/, /todos)

<img src="https://github.com/user-attachments/assets/85227451-d92c-4408-aba7-d5e7517f525f" style="width: 500px;" />
<img src="https://github.com/user-attachments/assets/41f6aa8e-d944-4302-b152-58d1be9de240" style="width: 500px;" />


<br/><br/>

## API 요청 및 인증 처리

### Axios `instance` 설정

- instance.ts 파일에서 axios 인스턴스를 생성

  ```javascript
  const baseURL = 'http://localhost:8080'

  const instance = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  ```

<br/>

### `interceptors` 를 사용해 Authorization 헤더를 동적으로 추가

- API 호출 시마다 Authorization 헤더에 `Bearer ${토큰}` 형식으로 인증 정보를 전달

  ```javascript
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
  ```

<br/>

### API 호출

API 요청 시 인증 정보를 자동으로 포함하여 각각의 엔드포인트에 요청
인터셉터를 통해 Authorization 헤더가 자동으로 추가되므로 별도로 처리할 필요가 없음

<br/>


## useForm 커스텀 훅 사용

폼 이벤트 처리를 재사용 가능하고 일관성 있게 관리하기 위해 커스텀 훅을 사용

- 예) useTodoForm.ts
  ```javascript
  export const useTodoForm = (initialValues: TodoProps, onSubmit: () => void) => {
    const [values, setValues] = useState(initialValues)
  
    const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const { name, value } = e.target
  
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }))
    }
  
    const handleReset = () => {
      setValues(initialValues)
    }
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
  
      // onSubmit 실행 로직
    }
  
    return {
      values,
      setValues,
      handleChange,
      handleSubmit,
      handleReset,
    }
  }
  ```


