package com.bistu.tally;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.core.env.StandardEnvironment;

@SpringBootApplication
public class TestApplication {
    public static void main(String[] args){
        SpringApplicationBuilder builder = new SpringApplicationBuilder();
        builder.environment(new StandardEnvironment());
        builder.sources(TestApplication.class);
        builder.main(TestApplication.class);
        builder.run(args);
    }
}
