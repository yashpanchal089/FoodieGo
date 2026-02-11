package in.yash.foodiesapi.Service;

import in.yash.foodiesapi.io.UserRequest;
import in.yash.foodiesapi.io.UserResponse;

public interface UserService {
    UserResponse registerUser(UserRequest request);

    String findByUserId();
}
