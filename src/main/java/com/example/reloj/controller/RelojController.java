package com.example.reloj.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.example.reloj.service.HoraService;
import com.example.reloj.model.HoraResponse;

@RestController
public class RelojController {

    private final HoraService horaService;

    public RelojController(HoraService horaService) {
        this.horaService = horaService;
    }

    @GetMapping("/hora")
    public HoraResponse getHora() {
        return new HoraResponse(horaService.obtenerHoraActual());
    }
}