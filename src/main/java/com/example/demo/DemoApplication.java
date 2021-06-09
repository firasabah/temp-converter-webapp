
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping("/converter/temp/f2c/{temp}")
	public double convertF2C(@PathVariable(value = "temp") float tempF) {
		return ((tempF - 32) * 5.0) / 9.0;
	}

	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping("/converter/temp/c2f/{temp}")
	public double convertC2F(@PathVariable(value = "temp") float tempC) {
		return (tempC * 9.0 / 5.0) + 32.0;
	}
}
