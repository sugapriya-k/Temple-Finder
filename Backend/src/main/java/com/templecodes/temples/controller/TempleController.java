package com.templecodes.temples.controller;

import com.templecodes.temples.model.Temple;
import com.templecodes.temples.service.TempleService;
import com.templecodes.temples.repository.TempleRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/temples")
public class TempleController {
    private final TempleService templeService;
    private final TempleRepository templeRepository;

    public TempleController(TempleService templeService, TempleRepository templeRepository) {
        this.templeService = templeService;
        this.templeRepository = templeRepository;
    }

    @GetMapping("/get")
    public List<Temple> getAllTemples() {
        return templeService.findAllTemples();
    }

    @GetMapping("/nearby")
    public List<Temple> getNearbyTemples(@RequestParam double latitude, @RequestParam double longitude, @RequestParam double radius) {
        return templeService.findNearbyTemples(latitude, longitude, radius);
    }

    @GetMapping("/suggestions")
    public List<String> getSuggestions(@RequestParam("name") String name){
        return templeRepository.findSuggestionByNameContainingIgnoreCase(name);
    }

    @GetMapping("/getbyname")
    public List<Temple> searchbyName(@RequestParam("name") String name){
        return templeRepository.findByNameContainingIgnoreCase(name);
    }

    @GetMapping("/getbyaddress")
    public List<Temple> searchbyAddressorDistrict(@RequestParam("keyword") String keyword){
        return templeRepository.findByDistrictOrAddressContainingIgnoreCase(keyword);
    }

    @GetMapping("/famous")
    public List<Temple> getfamoustemples(@RequestParam("key") String key){
        return templeRepository.findByFamousContainingIgnoreCase(key);
    }

    @GetMapping("/getimg/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable("id") int id){

        byte[] image=templeService.getImageById(id);

        HttpHeaders headers=new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);

        return new ResponseEntity<>(image,headers, HttpStatus.OK);
    }

}

