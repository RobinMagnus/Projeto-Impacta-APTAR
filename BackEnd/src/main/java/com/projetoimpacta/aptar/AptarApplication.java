package com.projetoimpacta.aptar;

import com.projetoimpacta.aptar.services.FileMonitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AptarApplication implements CommandLineRunner {

	@Autowired
	private FileMonitorService fileMonitorService;

	public static void main(String[] args) {
		SpringApplication.run(AptarApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// Inicia o monitoramento da pasta
		fileMonitorService.startMonitoring();
	}
}
