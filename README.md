# React 프로젝트 초기세팅 방법을 기록하였다

    해당 파일은 기본적 세팅이 되어 있다. (sass사용)

    #### 1. 소문자(kebab-case로 작성하는 것이 일반적)로 작성하여 프로젝트를 설치합니다.

        npx create-react-app [프로젝트명]

    #### 2. Routing
        라우팅 기능을 추가하기 위해, 많이 사용되고 있는 react-router-dom을 설치합니다.

            npm install react-router-dom

    #### 3. Styling
        스타일링을 위해 Sass와, styled-components 중에서 각 프로젝트에서 필요한 라이브러리를 설치합니다.

        - Sass

            npm install sass

        - styled-components & styled-reset

            npm install styled-components styled-reset

    #### 4. ESLint,Prettier
        둘 다 동시에 설치 할수 있습니다.

            npm install -D prettier eslint-config-prettier eslint-plugin-prettier

    ## 추천 세팅

        다양한 설정파일이 존재할 때에는 차례대로 적용한 뒤 마지막에 적용되는 설정이 최종적으로 적용되기 때문에 
        settings.json → .editorconfig → .prettierrc 순서로 설정이 적용됩니다.
        아래 설정들은 자동으로 포맷팅 하기 위한 최소한의 사항일 뿐이기 때문에 **팀 컨벤션에 따라 원하는 옵션을 추가하거나, 빼도 무방합니다.
        ** 더 자세한 내용은 공식문서에 잘 나와 있으니 참고해 보세요.
        settings.json, .eslintrc, .prettierrc 파일을 아래와 같이 프로젝트 루트 폴더에 생성하고 내용을 기입하면, 프로젝트에 한해서, 해당 설정이 우선으로 적용됩니다.

    -#### 5. .vscode/settings.json

        프로젝트 최상위에 .vscode 폴더를 생성하여, settings.json 파일을 만들어 아래의 코드를 입력해주세요.

            // .vscode/settings.json

                {
                "editor.defaultFormatter": "esbenp.prettier-vscode",
                "editor.tabSize": 2,
                "editor.insertSpaces": true,
                "editor.formatOnSave": true,
                "editor.codeActionsOnSave": {
                    "source.fixAll.eslint": true
                },
                "javascript.format.enable": false,
                "eslint.alwaysShowStatus": true,
                "files.autoSave": "onFocusChange"
                }

    -#### 6. eslintrc
        프로젝트 최상위에 .eslintrc 파일을 만들어 아래의 코드를 입력해주세요. 팀원이 모두 맥 유저일 경우와, 그렇지 않은 경우의 세팅이 다르니 확인 후에 적용해주세요.

        - eslintcache

        eslint는 lint 검사를 할 때마다 .eslintcache 파일을 생성하고 업데이트합니다. .eslintcache 파일 안에 기존에 lint 검사를 한 내역을 저장해두어서 매번 전체 파일을 검사하는 것이 아니라 변경된 파일에 대해서만 lint 검사를 할 수 있습니다. 이 파일의 목적상, git으로 관리할 필요가 없으므로 .gitignore에 추가해주어야 합니다.

        // .gitignore

            .eslintcache


      - 팀원이 모두 맥 유저일 경우

        // .eslintrc

                {
                "extends": ["react-app", "plugin:prettier/recommended"],
                "rules": {
                    "no-var": "warn", // var 금지
                    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
                    "no-console": ["warn", { "allow": ["warn", "error"] }], // console.log() 금지
                    "eqeqeq": "warn", // 일치 연산자 사용 필수
                    "dot-notation": "warn", // 가능하다면 dot notation 사용
                    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
                    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
                    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
                    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
                    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
                    "react/no-unused-state": "warn", // 사용되지 않는 state
                    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
                    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
                    "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
                    }
                }

     - 팀원 중 윈도우 유저가 있을 경우

                // .eslintrc

                {
                "extends": ["react-app", "plugin:prettier/recommended"],
                "rules": {
                    "no-var": "warn", // var 금지
                    "no-multiple-empty-lines": "warn", // 여러 줄 공백 금지
                    "no-console": ["warn", { "allow": ["warn", "error"] }], // console.log() 금지
                    "eqeqeq": "warn", // 일치 연산자 사용 필수
                    "dot-notation": "warn", // 가능하다면 dot notation 사용
                    "no-unused-vars": "warn", // 사용하지 않는 변수 금지
                    "react/destructuring-assignment": "warn", // state, prop 등에 구조분해 할당 적용
                    "react/jsx-pascal-case": "warn", // 컴포넌트 이름은 PascalCase로
                    "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
                    "react/jsx-no-useless-fragment": "warn", // 불필요한 fragment 금지
                    "react/no-unused-state": "warn", // 사용되지 않는 state
                    "react/jsx-key": "warn", // 반복문으로 생성하는 요소에 key 강제
                    "react/self-closing-comp": "warn", // 셀프 클로징 태그 가능하면 적용
                    "react/jsx-curly-brace-presence": "warn", // jsx 내 불필요한 중괄호 금지
                    "prettier/prettier": [
                    "error",
                    {
                        "endOfLine": "auto"
                    }
                    ]
                }
                }

        -#### 7. prettierrc

        프로젝트 최상위에 .prettierrc 파일을 만들어 아래의 코드를 입력해주세요.


                // .prettierrc

                    {
                    "tabWidth": 2,
                    "endOfLine": "lf",
                        "arrowParens": "avoid",
                        "singleQuote": true,
                    }

    ## Trouble Shooting

        ### 서로 다른 포맷터는 extention으로 설치 하지 말 것

            - 충돌을 일으켜 예상치 못한 동작을 일으킬 수 있으므로 하나만 남기고 삭제합니다. (ex. beautify vs prettier)

        ###  context.getPhysicalFilename is not a function 에러

        eslint-plugin-prettier 설치 후 context.getPhysicalFilename is not a function 에러가 발생하는 경우가 있습니다. CRA에 내장된 eslint 버전은 7.28.0 인데, eslint-plugin-prettier, eslint-config-prettier에서 요구되는 eslint 버전은 7.32 이상이라서 발생하는 문제입니다. 최신 버전의 npm(v8)은 install 시에 이런 문제를 파악하고 자동으로 업데이트 해주기 때문에 문제가 발생하지 않지만 구 버전의 npm(v6~7)의 경우에는 해결해주지 않아서 위와 같은 에러 발생하게 됩니다.  아래와 같이 npm을 업데이트하고 package를 삭제 후 재설치하는 과정을 통해서 해결할 수 있습니다.

        1. `npm install npm@latest -g`
        2. `npm -v`
        3. `npm uninstall -D eslint-config-prettier eslint-plugin-prettier`
        4. `npm install -D eslint-config-prettier eslint-plugin-prettier`

# 마지막으로 파일구조.png를 참고하세요
