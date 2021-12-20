package com.revature.rest_template;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;

import java.time.Duration;
import java.util.HashMap;

public class Demo {

    public static void main(String[] args) {

        // RestTemplate: The AJAX/Fetch of Spring

        String apiUrl = "http://localhost:5000/quizzard";
        RestTemplate client = new RestTemplate();

        Credentials testUserCreds = new Credentials("test", "test");
        ResponseEntity<Principal> response = client.postForEntity(apiUrl + "/auth", testUserCreds, Principal.class);

        if (response.getStatusCode().value() != 200) {
            throw new RuntimeException("Invalid credentials provided!");
        }

        String token = response.getHeaders().get("Authorization").get(0);
        System.out.println(token);
        System.out.println(response.getBody());

        //---------------------------------------------------------------------------------------------------------------

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Authorization" , token);
        HttpEntity requestConfig = new HttpEntity(httpHeaders);

        ResponseEntity<HashMap[]> questionsResponse = client.exchange(apiUrl + "/questions", HttpMethod.GET, requestConfig, HashMap[].class);
        System.out.println(questionsResponse.getStatusCode());

        for (HashMap question : questionsResponse.getBody()) {
            System.out.println(question);
        }

        //--------------------------------------------------------------------------------

        // WebClient: The Axios of Spring

        HttpClient httpClient = HttpClient.create()
                                          .responseTimeout(Duration.ofMillis(5000));

        WebClient betterClient = WebClient.builder()
                                          .baseUrl(apiUrl)
                                          .clientConnector(new ReactorClientHttpConnector(httpClient))
                                          .build();

        Principal authUser = betterClient.post()
                                         .uri("/auth")
                                         .bodyValue(testUserCreds)
                                         .retrieve()
                                         .bodyToMono(Principal.class).block();

        System.out.println(authUser);

    }

}
