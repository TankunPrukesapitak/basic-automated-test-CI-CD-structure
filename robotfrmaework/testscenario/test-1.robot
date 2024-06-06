*** Settings ***
Library    SeleniumLibrary
Resource      ../testdata/import.robot


*** Test cases ***
TC_L_1 Verify that the user is able to log in successfully if the username and password are correct
    keyword_login.Open Browser To Login Page
    keyword_login.Input Username And Password       ${valid_username}     ${valid_password}
    Wait Until Location Is      ${baseURL}${expect_login_path}      10
    Close Browser
    

TC_L_2 Verify that the user is not able to log in if the username is incorrect.
    keyword_login.Open Browser To Login Page
    keyword_login.Input Username And Password       ${invalid_username}     ${valid_password}
    Wait Until Page Contains         ${expect_login_path}    10
    Close Browser
