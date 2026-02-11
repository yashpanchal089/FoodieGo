package in.yash.foodiesapi.Repository;

import in.yash.foodiesapi.entity.CartEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends MongoRepository<CartEntity, String>{

    Optional<CartEntity> findByUserId(String userId);

    long deleteByUserId(String userId);

}
