package com.revature.spring_mvc.web.dtos;

public class LoginSuccessResponse {

    private String username;
    private String token;

    public LoginSuccessResponse() {
        super();
    }

    public LoginSuccessResponse(String username, String token) {
        this.username = username;
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "LoginSuccessResponse{" +
                "username='" + username + '\'' +
                ", token='" + token + '\'' +
                '}';
    }

}
