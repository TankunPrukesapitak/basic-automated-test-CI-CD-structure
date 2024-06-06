
*** Keywords ***

Open Browser To Login Page
    Open Browser    ${baseURL}${login_path}    ${BROWSER}

Input Username And Password
    [Arguments]     ${username}     ${password}
    Input Text    ${username_textfiled}    ${username}
    Input Text    ${password_textfield}    ${password}
    Click Button  ${submit_login}




