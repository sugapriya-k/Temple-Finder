package com.templecodes.temples.service;

import com.templecodes.temples.model.Temple;
import com.templecodes.temples.repository.TempleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TempleService {
    private final TempleRepository templeRepository;

    public TempleService(TempleRepository templeRepository) {
        this.templeRepository = templeRepository;
    }


    public List<Temple> findAllTemples(){
        return templeRepository.findAll();
    }
    public List<Temple> findNearbyTemples(double currentLatitude, double currentLongitude, double radius) {
        // Calculate the minimum and maximum latitude/longitude based on the radius
        double minLatitude = currentLatitude - (radius / 111.32);
        double maxLatitude = currentLatitude + (radius / 111.32);
        double minLongitude = currentLongitude - (radius / (111.32 * Math.cos(Math.toRadians(currentLatitude))));
        double maxLongitude = currentLongitude + (radius / (111.32 * Math.cos(Math.toRadians(currentLatitude))));

        return templeRepository.findByLatitudeBetweenAndLongitudeBetween(minLatitude, maxLatitude, minLongitude, maxLongitude);
    }

    public byte[] getImageById(int id){
        Optional<Temple> imageOptional= templeRepository.findById(id);

        if(imageOptional.isPresent()){
            Temple image=imageOptional.get();
            return image.getImage();
        }
        return null;
    }

}
