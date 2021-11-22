package com.revature.multithreaded_java.web_server;

import com.sun.net.httpserver.HttpServer;

import java.net.InetSocketAddress;
import java.util.concurrent.Executors;

public class AppServer {

    private static final AppServer APP_SERVER = new AppServer();

    private HttpServer webServer;

    private AppServer() {

        try {

            // Initialize the web server and allocate a thread pool for handling incoming requests
            // HTTP usually communicates over port 80 (for production) or 8080 (for development)
            // HTTPS is strictly over port 443
            webServer = HttpServer.create(new InetSocketAddress(8080), 0);
            webServer.setExecutor(Executors.newFixedThreadPool(10));

            webServer.createContext("/test", httpExchange -> {
                String payload = "<h1>/test works!</h1>\n";
                payload += "<h2>This request was processed by thread: " + Thread.currentThread().getName() + "</h2>";
                httpExchange.getResponseHeaders().set("Content-Type", "text/html");
                httpExchange.sendResponseHeaders(200, payload.length());
                httpExchange.getResponseBody().write(payload.getBytes());
            });

            webServer.createContext("/users", httpExchange -> {
                String payload = "<h1>/users works!</h1>";
                httpExchange.getResponseHeaders().set("Content-Type", "text/html");
                httpExchange.sendResponseHeaders(200, payload.length());
                httpExchange.getResponseBody().write(payload.getBytes());
            });

            webServer.createContext("/cards", httpExchange -> {
                String payload = "<h1>/cards works!</h1>";
                httpExchange.getResponseHeaders().set("Content-Type", "text/html");
                httpExchange.sendResponseHeaders(200, payload.length());
                httpExchange.getResponseBody().write(payload.getBytes());
            });



        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public void startup() {
        webServer.start();
        System.out.println("Application server started and listening at http://localhost:8080");
    }

    public void shutdown() {
        System.out.println("Shutting down application server...");
        webServer.stop(5);
    }

    public static AppServer getInstance() {
        return APP_SERVER;
    }

}
