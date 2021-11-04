package com.revature.hello_web;

import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.concurrent.Executors;

public class HelloWeb {
//main




    public static void main(String[] args) {
        
        try {
        
            HttpServer webServer = HttpServer.create(new InetSocketAddress(8080), 0);
            webServer.setExecutor(Executors.newFixedThreadPool(5));
            
            webServer.createContext("/hello", httpExchange -> {
                String payload = "Hello, Web!";
                httpExchange.sendResponseHeaders(200, payload.length());
                httpExchange.getResponseBody().write(payload.getBytes());
            });
            
            webServer.start();
            System.out.println("Application server started and listening at http://localhost:8080/hello");
        
        } catch (IOException e) {
            e.printStackTrace();
        }
        
    }
    
}

