package com.revature.multithreaded_java.web_server;

public class AppDriver {

    public static void main(String[] args) {
        AppServer server = AppServer.getInstance();
        server.startup();
    }
}
