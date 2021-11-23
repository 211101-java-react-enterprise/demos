package com.revature.servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class TestServlet extends HttpServlet {

    @Override
    public void init() throws ServletException {
        System.out.println("TestServlet#init invoked!");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("TestServlet#doGet invoked!");
        System.out.println(req.getAttribute("request-state")); // will be null if req was not forwarded from AnotherServlet
        System.out.println(this.getServletConfig().getInitParameter("someParam")); // someValue
        System.out.println(this.getServletContext().getInitParameter("contextParam")); // contextValue
        resp.getWriter().write("<h1>/test works!!!!!!!!!!!!!</h1>");
    }

    @Override
    public void destroy() {
        System.out.println("TestServlet#destroy invoked!");
    }

}
