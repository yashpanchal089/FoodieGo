package in.yash.foodiesapi.Repository;

import in.yash.foodiesapi.entity.FoodEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FoodRepository extends MongoRepository<FoodEntity, String> {
}
