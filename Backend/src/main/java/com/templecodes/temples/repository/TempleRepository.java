package com.templecodes.temples.repository;

import com.templecodes.temples.model.Temple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TempleRepository extends JpaRepository<Temple,Integer> {
    List<Temple> findByLatitudeBetweenAndLongitudeBetween(double minLat,double maxLat,double minLong,double maxLong);

    @Query("SELECT t FROM Temple t WHERE UPPER(t.district) LIKE %?1% OR UPPER(t.address) LIKE %?1%")
    List<Temple> findByDistrictOrAddressContainingIgnoreCase(String keyword);
    List<Temple> findByNameContainingIgnoreCase(String name);

    List<Temple> findByFamousContainingIgnoreCase(String name);
    @Query("SELECT DISTINCT t.name FROM Temple t WHERE UPPER(t.name) LIKE CONCAT('%',UPPER(:name),'%' ) ")
    List<String> findSuggestionByNameContainingIgnoreCase(@Param("name") String name);
}
